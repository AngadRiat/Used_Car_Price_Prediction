#!/usr/bin/env python
# coding: utf-8

# In[5]:


import numpy as np
import pandas as pd
import pickle
from sklearn.preprocessing import StandardScaler

def predict_module(inp):
    df_1 = pd.DataFrame(inp)
    with open("one_hot_encoder.pkl","rb") as file:
        ohe = pickle.load(file)
    #df_1.drop(["Location","Brand"],axis=1,inplace=True)
    x_num = df_1.select_dtypes(exclude=["object","category"])
    x_cat = df_1.select_dtypes(include=["object","category"])
    x_cat = ohe.transform(x_cat)
    df_new = pd.concat((x_num,x_cat),axis=1)
    with open("scaler.pkl","rb") as file:
        scaler = pickle.load(file)
    df_new = scaler.transform(df_new)
    with open("final_model.pkl","rb") as file:
        model = pickle.load(file)
    y_pred = model.predict(df_new)
    return np.round(y_pred[0],2)

