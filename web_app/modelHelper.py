import pandas as pd
import pickle
import numpy as np

class ModelHelper():
    def __init__(self):
        pass

    def makePredictions(self, age, dist, monthincome, numcoworked, 
                        pctsalhike, totalwrkyrs, yrsatco, yearsmanag,
                        envsat, jobsat):

        input_pred = [[age, dist,monthincome, numcoworked, 
                        pctsalhike, totalwrkyrs, yrsatco,
                        yearsmanag, envsat, jobsat]]

        # Load in prediction model
        filename = 'finalized_model.sav'
        model = pickle.load(open(filename, 'rb'))

        # put input_pred into an array and run it through the model
        X = np.array(input_pred)
        preds_singular = model.predict(X)

        # output the prediction
        return preds_singular[0]