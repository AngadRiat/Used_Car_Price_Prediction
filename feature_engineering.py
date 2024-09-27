#!/usr/bin/env python
# coding: utf-8

# In[2]:


import pandas as pd

def null_values(df : pd.DataFrame) -> pd.DataFrame:
    df.dropna(subset=["Model"],axis=0,inplace=True)
    print("Dropped a row containing NaN model value")
    num_missing = df.isnull().sum(axis=1)
    print()
    
    #Investigating how many missing values per row are there for each variable
    for n in num_missing.value_counts().sort_index().index:
        if n > 0:
            print("*" *30,f'\nFor the rows with exactly {n} missing values, NAs are found in:')
            n_miss_per_col = df[num_missing == n].isnull().sum()
            print(n_miss_per_col[n_miss_per_col > 0])
            print('\n\n')
            
    print("Now filling Engine, Power, Mileage, Seats columns")
            
    new_column = df.groupby(['Name','Year'], as_index=False)["Engine"].apply(lambda x:x.fillna(x.median()))
    df["Engine"] = new_column.reset_index(level=0, drop=True)
    # filling the median values using group by clause
    new_column = df.groupby(['Name','Year'], as_index=False)["Power"].apply(lambda x:x.fillna(x.median()))
    df["Power"] = new_column.reset_index(level=0, drop=True)
    new_column = df.groupby(['Name','Year'], as_index=False)["Mileage"].apply(lambda x:x.fillna(x.median()))
    df["Mileage"] = new_column.reset_index(level=0, drop=True)
    new_column=df.groupby(['Brand','Model'], as_index=False)['Engine'].apply(lambda x:x.fillna(x.median()))
    df["Engine"] = new_column.reset_index(level=0, drop=True)
    new_column=df.groupby(['Brand','Model'], as_index=False)['Power'].apply(lambda x:x.fillna(x.median()))
    df["Power"] = new_column.reset_index(level=0, drop=True)
    new_column=df.groupby(['Brand','Model'], as_index=False)['Mileage'].apply(lambda x:x.fillna(x.median()))
    df["Mileage"] = new_column.reset_index(level=0, drop=True)
    new_column=df.groupby(['Name'], as_index=False)['Seats'].apply(lambda x:x.fillna(x.median()))
    df["Seats"] = new_column.reset_index(level=0, drop=True)
    new_column=df.groupby(['Model'], as_index=False)['Seats'].apply(lambda x:x.fillna(x.median()))
    df["Seats"] = new_column.reset_index(level=0, drop=True)
    df["Seats"] = df["Seats"].fillna(5)
    
    # now filling new_price column
    print("Now filling new_price_columns")
    
    new_column=df.groupby(['Name','Year'], as_index=False)['new_price_num'].apply(lambda x:x.fillna(x.median()))
    df["new_price_num"] = new_column.reset_index(level=0, drop=True)
    new_column=df.groupby(['Name'], as_index=False)['new_price_num'].apply(lambda x:x.fillna(x.median()))
    df["new_price_num"] = new_column.reset_index(level=0, drop=True)
    new_column=df.groupby(['Brand','Model'], as_index=False)["new_price_num"].apply(lambda x:x.fillna(x.median()))
    df["new_price_num"] = new_column.reset_index(level=0, drop=True)
    new_column=df.groupby(['Brand'], as_index=False)['new_price_num'].apply(lambda x:x.fillna(x.median()))
    df["new_price_num"] = new_column.reset_index(level=0, drop=True)
    df.dropna(subset=["Mileage","Engine","Power","new_price_num"],inplace=True)
    
    # dropping Name and Year columns
    
    df.drop(["Name","Year"],axis=1,inplace=True)
    
    return df
    

