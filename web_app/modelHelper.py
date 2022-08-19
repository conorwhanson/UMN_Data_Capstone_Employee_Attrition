import pandas as pd
import pickle
import numpy as np

class ModelHelper():
    def __init__(self):
        pass

    def makePredictions(self, age, travel, department, dist, 
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
        model = pickle.load(open(filename, 'rb'))

        X = np.array(input_pred)
        preds = model.predict_proba(X)
        preds_singular = model.predict(X)

        return preds_singular[0]