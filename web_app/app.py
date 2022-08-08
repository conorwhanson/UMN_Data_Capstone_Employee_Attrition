from flask import Flask, render_template, redirect
import pandas as pd
import numpy as np
import os

app = Flask(__name__)

## define app route to root page
@app.route("/")
def home():
    
    return render_template('index.html')

## app route to prediction engine
@app.route("/predictionengine")
def predict():
    
    return render_template('/predictionengine')

## app route to data viz
@app.route("/tableauviz")
def viz():
    
    return render_template('/tableauviz')

## define app route to about us page
@app.route("/aboutus")
def about():
    
    return render_template('/aboutus')

## app route to works cited page
@app.route("/workscited")
def works():
    
    return render_template('/workscited')

if __name__ == "__main_":
    app.run(debug=True)