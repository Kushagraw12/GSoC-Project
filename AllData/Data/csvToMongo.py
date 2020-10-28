import pandas as pd
import json
import pymongo
import re

dataFile = "2018-orgs.csv"
df = pd.read_csv(dataFile)

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient['gsoc_0']
mycol = mydb['organisations']
Obj = []
for i in df.iloc[0:].values:
    model = {}
    model['orgName'] = re.sub(r'\W', " ", i[1].split(',')[1]).strip()
    s = []
    for stc in i[2].split(','):
        s.append(stc.strip())
    model['Stack'] = s
    model['Slots'] = i[3]
    model['Page'] = i[4]
    model['Contact'] = i[5]
    mycol.insert_one(model)
    Obj.append(model)
print(Obj)
