from flask import Flask, render_template, redirect, request, jsonify
import pandas as pd
import numpy as np
import json
from modelHelper import ModelHelper
from graphHelper import GraphHelper
from sqlHelper import SQLHelper

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

modelHelper = ModelHelper()
sqlHelper = SQLHelper()
graphHelper = GraphHelper()

## define app route to root page
@app.route("/")
def home():
    
    return render_template('index.html')

## app route to prediction engine
@app.route("/prediction")
def prediction():
    
    return render_template('prediction.html')

## app route to data viz
@app.route("/dataviz")
def dataviz():
    
    return render_template('dataviz.html')

## define app route to about us page
@app.route("/aboutus")
def aboutus():
    
    return render_template('aboutus.html')

## app route to works cited page
@app.route("/workscited")
def workscited():
    
    return render_template('workscited.html')

## app route to data report page
@app.route("/datareport")
def documentation():
    
    return render_template('documentation.html')

## define app route to plotly page
@app.route("/plotly")
def plotly():
    
    return render_template('plotly.html')


## app route to explore data page
@app.route("/explore")
def sqlPage():
    
    return render_template('sql_page.html')

## Prediction post receiver
@app.route("/makePredictions", methods=["POST"])
def makePredictions():
    content = request.json['data']

    # Parse the data from the json
    age = int(content["Age"])
    dist = float(content["DistanceFromHome"])
    monthincome = float(content["MonthlyIncome"])
    numcoworked = float(content["NumCompaniesWorked"])
    pctsalhike = int(content["PercentSalaryHike"])
    totalwrkyrs = float(content["TotalWorkingYears"])
    yrsatco = int(content["YearsAtCompany"])
    yearsmanag = int(content["YearsWithCurrManager"])
    envsat = float(content["EnvironmentSatisfaction"])
    jobsat = float(content["JobSatisfaction"])

    prediction = modelHelper.makePredictions(age, dist, monthincome, numcoworked, 
                                            pctsalhike, totalwrkyrs, yrsatco, yearsmanag,
                                            envsat, jobsat)
    print(prediction)
    return(jsonify({"ok": True, "prediction": float(prediction)}))

@app.route("/graph", methods=["POST"])
def graph():
    content = request.json["data"]
    print(content)
    
    # parse
    min_age = float(content["min_age"])
    max_age = float(content["max_age"])
    df = graphHelper.getDataFromDatabase(min_age, max_age)
    return(jsonify(json.loads(df.to_json(orient="records"))))

@app.route("/scattergraph", methods=["POST"])
def graph2():
    content = request.json["data"]
    print(content)
    
    # parse
    min_age = float(content["min_age"])
    max_age = float(content["max_age"])
    df = graphHelper.getDataFromDatabase2(min_age, max_age)
    return(jsonify(json.loads(df.to_json(orient="records"))))

@app.route("/getSQL", methods=["POST"])
def get_table():
    content = request.json["data2"]
    print(content)
    
    # parse
    sex_flag = content["sex_flag"]
    min_age = float(content["min_age"])
    max_age = float(content["max_age"])
    attrition = str(content["attrition"])
    df = sqlHelper.getDataFromDb(sex_flag, min_age, max_age, attrition)
    return(jsonify(json.loads(df.to_json(orient="records"))))

####################################################################
@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    return r

if __name__ == "__main__":
    app.run(debug=True)