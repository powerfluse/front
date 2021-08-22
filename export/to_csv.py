#!/usr/bin/env python3

import requests
import os
import pandas as pd

token = os.getenv("NOCODB_TOKEN")
headers = {"xc-auth": token}

url_m = os.getenv("NOCODB_URL") + "/nc/bvpk_9YLS/api/v1/mitglieder?limit=500"
res_m = requests.get(url_m, headers=headers)
df_mitglieder = pd.concat([pd.DataFrame([i]) for i in res_m.json()])

url_fm = os.getenv("NOCODB_URL") + "/nc/bvpk_9YLS/api/v1/firmenmitglieder?limit=500"
res_fm = requests.get(url_fm, headers=headers)
df_fm = pd.concat([pd.DataFrame([i]) for i in res_fm.json()])

url_nl = os.getenv("NOCODB_URL") + "/nc/bvpk_9YLS/api/v1/newsletter?limit=500"
res_nl = requests.get(url_nl, headers=headers)
df_nl = pd.concat([pd.DataFrame([i]) for i in res_nl.json()])

df_nl = df_nl.rename(columns={"nl_email": "email"})
df_nl["anrede"] = None
df_nl["vorname"] = None
df_nl["nachname"] = None
print(df_nl)

# Newsletter
df_newsletter = df_mitglieder[df_mitglieder.nl_consent == True]
df_newsletter = df_newsletter[["email", "anrede", "vorname", "nachname"]]
df_newsletter["sign_up"] = "bvpk.org/mitglied-werden"
df_newsletter = df_newsletter.append(df_nl, ignore_index=True)
print(df_newsletter)
df_newsletter.to_csv("cr_newsletter.csv", index=False)

# Export data from /mitglied-werden
df_mitglieder = df_mitglieder[
    [
        "anrede",
        "vorname",
        "nachname",
        "email",
        "feuerwerk_net",
        "feuerwerk_versicherung",
        "foerderbeitrag",
        "zahlungsrhythmus",
        "iban",
    ]
]
df_mitglieder["iban"] = df_mitglieder["iban"].apply(lambda x: "****" + x[-4:])
df_mitglieder["sign_up"] = "bvpk.org/mitglied-werden"
df_mitglieder.to_csv("cr_mitglieder.csv", index=False)


# Export data from /mitglied-werden-firma
# Firmenmitglieder
df_firmenmitglieder = df_fm[df_fm.f_nl_consent == True]
df_firmenmitglieder = df_firmenmitglieder[
    [
        "f_email",
        "f_name",
        "f_ap_anrede",
        "f_ap_nachname",
        "f_ap_vorname",
        "f_feuerwerknet",
        "f_zahlungsrhythmus",
        "f_beitrag",
        "f_iban",
    ]
]
df_firmenmitglieder["f_iban"] = df_firmenmitglieder["f_iban"].apply(
    lambda x: "****" + x[-4:]
)
df_firmenmitglieder["sign_up"] = "bvpk.org/mitglied-werden-firma"
df_firmenmitglieder.to_csv("cr_firmenmitglieder.csv", index=False)
