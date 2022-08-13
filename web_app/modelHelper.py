import pandas as pd
import datetime
import time
import pickle
import numpy as np

class ModelHelper():
    def __init__(self):
        pass

    def makePredictions(age, travel, department, dist, 
                        ed, edfield, gender, joblvl, role, marriage,
                        monthincome, numcoworked, pctsalhike, stdhours,
                        stonkopt, totalwrkyrs, training, yrsatco, lastpromo,
                        yearsmanag, envsat, jobsat, worklife, jobinv, perf):
                        
        # Parse Parse Parse!!


        input_pred = [[age, travel, department, dist, 
                        ed, edfield, gender, joblvl, role, marriage,
                        monthincome, numcoworked, pctsalhike, stdhours,
                        stonkopt, totalwrkyrs, training, yrsatco, lastpromo,
                        yearsmanag, envsat, jobsat, worklife, jobinv, perf]]


        filename = 'finalized_model.sav'
        ada_load = pickle.load(open(filename, 'rb'))

        X = np.array(input_pred)
        preds = ada_load.predict_proba(X)
        preds_singular = ada_load.predict(X)

        return preds_singular[0]