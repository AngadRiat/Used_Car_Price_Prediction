import pandas as pd
import numpy as np

def null_val_price(df : pd.DataFrame) -> pd.DataFrame:
    df2 = pd.read_csv("DATA/cleaned_dataset.csv")
    df2.drop(["Unnamed: 0","New_Price","Name","Year","Owner_Type","Mileage","Seats","Price"],axis=1,inplace=True)
    merged_df = pd.concat([df, df2], axis=0)
    merged_df.reset_index()
    merged_df.index = list(np.arange(0,7254))
    new_column=merged_df.groupby(['Brand','Model'], as_index=False)["new_price_num"].apply(lambda x:x.fillna(x.median()))
    merged_df["new_price_num"] = new_column.reset_index(level=0, drop=True)
    new_column=merged_df.groupby(['Brand'], as_index=False)['new_price_num'].apply(lambda x:x.fillna(x.median()))
    merged_df["new_price_num"] = new_column.reset_index(level=0, drop=True)
    a = merged_df.iloc[0]
    a = pd.DataFrame(a).T
    # Condition 1: Both Engine and Power are empty
    if (a["Engine"].eq("").any() and a["Power"].eq("").any()):
        a[["Kilometers_Driven", "Age", "new_price_num"]] = a[["Kilometers_Driven", "Age", "new_price_num"]].astype("float")

    # Condition 2: Engine is empty and Power is not empty
    elif (a["Engine"].eq("").any() and not a["Power"].eq("").any()):
        a[["Kilometers_Driven", "Power", "Age", "new_price_num"]] = a[["Kilometers_Driven", "Power", "Age", "new_price_num"]].astype("float")

    # Condition 3: Engine is not empty and Power is empty
    elif (not a["Engine"].eq("").any() and a["Power"].eq("").any()):
        a[["Kilometers_Driven", "Engine", "Age", "new_price_num"]] = a[["Kilometers_Driven", "Engine", "Age", "new_price_num"]].astype("float")

    # Condition 4: Neither Engine nor Power are empty
    else:
        a[["Kilometers_Driven", "Engine", "Power", "Age", "new_price_num"]] = a[["Kilometers_Driven", "Engine", "Power", "Age", "new_price_num"]].astype("float")

    
    return a

def null_val_engine(df : pd.DataFrame) -> pd.DataFrame:
    df2 = pd.read_csv("DATA/cleaned_dataset.csv")
    print("\n\n")
    df2.drop(["Unnamed: 0","New_Price","Name","Year","Owner_Type","Mileage","Seats","Price"],axis=1,inplace=True)
    merged_df = pd.concat([df, df2], axis=0)
    merged_df.reset_index()
    merged_df.index = list(np.arange(0,7254))
    merged_df['Engine'] = merged_df.groupby(['Brand', 'Model'])['Engine'].transform(lambda x: x.fillna(x.median()))
    merged_df['Engine'] = merged_df['Engine'].fillna(merged_df['Engine'].median())
    merged_df['Engine'] = merged_df.groupby(['Brand'])['Engine'].transform(lambda x: x.fillna(x.median()))
    merged_df['Engine'] = merged_df['Engine'].fillna(merged_df['Engine'].median())  
    a = merged_df.iloc[0]
    a = pd.DataFrame(a).T
    
    if a["Power"].eq("").any():
        a[["Kilometers_Driven", "Engine", "Age", "new_price_num"]] = a[["Kilometers_Driven", "Engine", "Age", "new_price_num"]].astype("float")
    else: 
        a[["Kilometers_Driven", "Engine", "Power", "Age", "new_price_num"]] = a[["Kilometers_Driven", "Engine", "Power", "Age", "new_price_num"]].astype("float")
    return a 
    
def null_val_power(df: pd.DataFrame) -> pd.DataFrame:
    df2 = pd.read_csv("DATA/cleaned_dataset.csv")
    print("\n\n")
    df2.drop(["Unnamed: 0","New_Price","Name","Year","Owner_Type","Mileage","Seats","Price"],axis=1,inplace=True)
    merged_df = pd.concat([df, df2], axis=0)
    merged_df.reset_index()
    merged_df.index = list(np.arange(0,7254))
    merged_df['Power'] = merged_df.groupby(['Brand', 'Model'])['Power'].transform(lambda x: x.fillna(x.median()))
    merged_df['Power'] = merged_df['Power'].fillna(merged_df['Power'].median())
    merged_df['Power'] = merged_df.groupby(['Brand'])['Power'].transform(lambda x: x.fillna(x.median()))
    merged_df['Power'] = merged_df['Power'].fillna(merged_df['Power'].median())  
    a = merged_df.iloc[0]
    a = pd.DataFrame(a).T
    a[["Kilometers_Driven","Engine","Power","Age","new_price_num"]] = a[["Kilometers_Driven","Engine","Power","Age","new_price_num"]].astype("float")
    
    return a