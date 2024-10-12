import numpy as np
import pandas as pd
import sys
from flask import Flask, render_template, request
import warnings
warnings.filterwarnings('ignore')

sys.path.insert(0, 'Modules')

from predictor import predict_module # type: ignore
from final_feature import null_val_price, null_val_engine, null_val_power # type: ignore

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/predict',methods=["POST"])
def get_value():
    brand = request.form['brand']
    new_price = request.form['new_price']
    transmission = request.form['transmission']
    fuelType = request.form['fuelType']
    location = request.form['location']
    Model = request.form['Model']
    Kilometers_Driven = request.form['Kilometers_Driven']
    Power = request.form['Power']
    Engine = request.form['Engine']
    Year = request.form['Year']
    Owner_Type = request.form['Owner_Type']
    Mileage = request.form['Mileage']
    
    input_dict = {'Location': str(location),
            'Kilometers_Driven': float(Kilometers_Driven),
            'Fuel_Type': str(fuelType),
            'Transmission': str(transmission),
            'Engine': str(Engine),
            'Power': str(Power),
            'Brand': str(brand),
            'Model': str(Model),
            'Age': (2024 - float(Year)),
            }

    if new_price=="":
        input_dict["new_price_num"] = np.nan
        df = pd.DataFrame(input_dict, index=[0])
        df = null_val_price(df)
    else:
        input_dict["new_price_num"] = int(new_price)/100000
        df = pd.DataFrame(input_dict, index=[0])

    if Engine=="":
        df["Engine"] = np.nan
        df = pd.DataFrame(df, index=[0])
        df = null_val_engine(df)
    else:
        df['Engine'] = float(Engine),
        df = pd.DataFrame(df, index=[0]) 
        
    if Power=="":
        df["Power"] = np.nan
        df = pd.DataFrame(df, index=[0])
        df = null_val_power(df)
    else:
        df['Power'] = float(Power),
        df = pd.DataFrame(df, index=[0]) 
    
    pred = predict_module(df)
    
    new_price = df["new_price_num"][0]
    Engine = df["Engine"][0]
    Power = df["Power"][0]
    
    return render_template('pass.html',b=brand,n=new_price,t=transmission,f=fuelType,o=Owner_Type,m=Model,k=Kilometers_Driven,p=Power,
                           e=Engine,y=Year,l=location,mi=Mileage,ans=pred)

if __name__ == "__main__":
    app.run(debug=True)