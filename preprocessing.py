#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np

def DataProcess(df : pd.DataFrame) -> pd.DataFrame:
    
    print("Step 0: Take Brand from Name")
    df['Name'] = df['Name'].str.replace('ISUZU','Isuzu')
    df["Brand"] = df["Name"].apply(lambda x : x.split()[0])
    print("Step 0 Done")
    
    print("Step 1: Take Model from Name")
    df['Model'] = df['Name'].str.split(' ').str[1] +" " + df['Name'].str.split(' ').str[2]
    df.loc[df.Brand=='Mini','Brand']='Mini Cooper'
    df.loc[df.Brand=='Land','Brand']='Land Rover'
    print("Step 1 Done")
    
    print("Step 2: Convert Year to Age")
    df["Age"] = 2020 - df["Year"]
    print("Step 2 Done")
    
    print("Step 3: Convert Mileage to kmpl")
    for i in range(len(df)):
        m = df.Mileage.iloc[i]
        m = str(m)
        if ' ' in m:
            m,unit = m.split(" ")
            
            if unit == "km/kg":
                if df.Fuel_Type.iloc[i] == "CNG":
                    m = float(m)*0.79
                elif df.Fuel_Type.iloc[i] == "LPG":
                    m = float(m)*0.535
        
        df["Mileage"].iloc[i] = round(float(m),2)
    print("Step 3 Done")
    
    print("Step 4: Convert owner type to int")
    transformation = {
    "First":3,
    "Second":2,
    "Third":1,
    "Fourth & Above":0
    }
    
    df['Owner_Type'] = df['Owner_Type'].map(transformation)
    print("Step 4 Done")
    
    print("Step 5: Convert Engine and Power type to int")
    df["Engine"] = df["Engine"].str.rstrip(" CC")
    df["Power"] = df["Power"].str.rstrip(" bhp")
    df["Power"]= df["Power"].replace(regex="null", value = np.nan)
    df["Engine"] = df["Engine"].astype("float")
    df["Power"] = df["Power"].astype("float")
    print("Step 5 Done")
    
    print("Step 6: Convert 0 values in mileage to NaN")
    df.loc[df["Mileage"]==0,'Mileage']=np.nan
    df["Mileage"] = df["Mileage"].astype("float")
    print("Step 6 Done")
    
    print("Step 7: Convert values in New_Price")
    # Create a new column after splitting the New_Price values.
    import re

    new_price_num = []

    # Regex for numeric + " " + "Lakh"  format
    regex_power = "^\d+(\.\d+)? Lakh$"

    for observation in df["New_Price"]:
        if isinstance(observation, str):
            if re.match(regex_power, observation):
                new_price_num.append(float(observation.split(" ")[0]))
        else:
            # If there are any missing values in the New_Price column, we add missing values to the new column
            new_price_num.append(np.nan)

    # all in crores
    new_price_num = []

    for observation in df["New_Price"]:
        if isinstance(observation, str):
            if re.match(regex_power, observation):
                new_price_num.append(float(observation.split(" ")[0]))
            else:
                # Converting values in Crore to lakhs
                new_price_num.append(float(observation.split(" ")[0]) * 100)
        else:
            # If there are any missing values in the New_Price column, we add missing values to the new column
            new_price_num.append(np.nan)

    # Add the new column to the data
    df["new_price_num"] = new_price_num
    print("Step 7 Done")
    
    return df

