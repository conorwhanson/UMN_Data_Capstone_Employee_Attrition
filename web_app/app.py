from flask import Flask, render_template, redirect, request, jsonify
import pandas as pd
import numpy as np
import json
from modelHelper import ModelHelper
from graphHelper import GraphHelper

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
modelHelper = ModelHelper()

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

## app route to explore data page
@app.route("/explore")
def documentation():
    
    return render_template('sql_page.html')

## Prediction post receiver
@app.route("/makePredictions")
def makePredictions():
    content = request.json['data']

    # Parse the data from the json
    age = int(content["Age"])
    travel = str(content["BusinessTravel"])
    department = str(content["Department"])
    dist = int(content["DistanceFromHome"])
    ed = int(content["Education"])
    edfield = str(content["EducationField"])
    gender = str(content["Gender"])
    joblvl = int(content["JobLevel"])
    role = str(content["JobRole"])
    marriage = str(content["MaritalStatus"])
    monthincome = int(content["MonthlyIncome"])
    numcoworked = int(content["NumCompaniesWorked"])
    pctsalhike = int(content["PercentSalaryHike"])
    stdhours = int(content["StandardHours"])
    stonkopt = int(content["StockOptionLevel"])
    totalwrkyrs = int(content["TotalWorkingYears"])
    training = int(content["TrainingTimesLastYear"])
    yrsatco = int(content["YearsAtCompany"])
    lastpromo = int(content["YearsSinceLastPromotion"])
    yearsmanag = int(content["YearsWithCurrManager"])
    envsat = int(content["EnvironmentSatisfaction"])
    jobsat = int(content["JobSatisfaction"])
    worklife = int(content["WorkLifeBalance"])
    jobinv = int(content["JobInvolvement"])
    perf = int(content["PerformanceRating"])


    prediction = modelHelper.makePredictions(age, travel, department, dist, 
                                            ed, edfield, gender, joblvl, role, marriage,
                                            monthincome, numcoworked, pctsalhike, stdhours,
                                            stonkopt, totalwrkyrs, training, yrsatco, lastpromo,
                                            yearsmanag, envsat, jobsat, worklife, jobinv, perf)
    print(prediction)
    return(jsonify({"ok": True, "prediction": str(prediction)}))

@app.route("/graph", methods=["POST"])
def get_sql():
    content = request.json["data"]
    print(content)
    
    # parse
    sex_flag = content["sex_flag"]
    min_age = float(content["min_age"])
    max_age = float(content["max_age"])
    df = GraphHelper.getDataFromDatabase(sex_flag, min_age, max_age)
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

if __name__ == "__main_":
    app.run(debug=True)