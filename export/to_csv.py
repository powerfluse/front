#!/usr/bin/env python3

import requests
import os
import pandas as pd

token = os.getenv("NOCODB_TOKEN")
headers = {"xc-auth": token}

url_m = os.getenv("NOCODB_URL") + "/nc/bvpk_9YLS/api/v1/mitglieder"
res_m = requests.get(url_m, headers=headers)
df_m = pd.concat([pd.DataFrame([i]) for i in res_m.json()])

url_fm = os.getenv("NOCODB_URL") + "/nc/bvpk_9YLS/api/v1/firmenmitglieder"
res_fm = requests.get(url_fm, headers=headers)
df_fm = pd.concat([pd.DataFrame([i]) for i in res_fm.json()])

url_nl = os.getenv("NOCODB_URL") + "/nc/bvpk_9YLS/api/v1/newsletter"
res_nl = requests.get(url_nl, headers=headers)
df_nl = pd.concat([pd.DataFrame([i]) for i in res_nl.json()])

print(df_nl)
