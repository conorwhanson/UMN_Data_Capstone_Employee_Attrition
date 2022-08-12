from flask import Flask, render_template, redirect, request, jsonify
import pandas as pd
import numpy as np
import os

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

## define app route to root page
@app.route("/")
def home():
    
    return render_template('index.html')

## app route to prediction engine
@app.route("/prediction")
def prediction():
    
    return render_template('/prediction.html')

## app route to data viz
@app.route("/dataviz")
def dataviz():
    
    return render_template('/dataviz.html')

## define app route to about us page
@app.route("/aboutus")
def aboutus():
    
    return render_template('/aboutus.html')

## app route to works cited page
@app.route("/workscited")
def workscited():
    
    return render_template('/workscited.html')

## app route to data report page
@app.route("/datareport")
def documentation():
    
    return render_template('/documentation.html')

## Prediction post receiver
@app.route("/makePredictions")
def makePredictions():
    content = request.json['data']
    print(content)
    
    return(jsonify({"ok": True}))

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