from flask import Flask, render_template, redirect
import pandas as pd
import numpy as np
import os

app = Flask(__name__)

## define app route to root page
@app.route("/")
def home():
    
    return render_template('index.html')

## define app route to about us page
@app.route("/aboutus")
def scrape():
    
    return render_template('/aboutus')

if __name__ == "__main_":
    app.run(debug=True)