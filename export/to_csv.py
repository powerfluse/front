#!/usr/bin/env python3

import requests
import os
import pandas as pd

# =============================================================================
# Getting the data
# =============================================================================

headers = {"xc-auth": os.getenv("NOCODB_TOKEN")}

url_m = os.getenv("NOCODB_URL") + "/nc/bvpk_9YLS/api/v1/mitglieder?limit=500"
res_m = requests.get(url_m, headers=headers)
df_m = pd.concat([pd.DataFrame([i]) for i in res_m.json()])

url_fm = os.getenv("NOCODB_URL") + "/nc/bvpk_9YLS/api/v1/firmenmitglieder?limit=500"
res_fm = requests.get(url_fm, headers=headers)
df_fm = pd.concat([pd.DataFrame([i]) for i in res_fm.json()])

url_nl = os.getenv("NOCODB_URL") + "/nc/bvpk_9YLS/api/v1/newsletter?limit=500"
res_nl = requests.get(url_nl, headers=headers)
df_nl = pd.concat([pd.DataFrame([i]) for i in res_nl.json()])

# =============================================================================
# Exporting the data
# =============================================================================

# -----------------------------------------------------------------------------
# ... for Cleverreach
# -----------------------------------------------------------------------------

df_nl = df_nl.rename(columns={"nl_email": "email"})
# Need to add these columns to append it later to df_newsletter
df_nl["anrede"] = None
df_nl["vorname"] = None
df_nl["nachname"] = None
df_nl = df_nl[["email", "anrede", "vorname", "nachname"]]
df_nl["sign_up"] = "newsletter_signup_before_cr"

# Newsletter
df_newsletter = df_m[df_m.nl_consent == True]
df_newsletter = df_newsletter[["email", "anrede", "vorname", "nachname"]]
df_newsletter["sign_up"] = "bvpk.org/mitglied-werden"
df_newsletter = df_newsletter.append(df_nl, ignore_index=True)
df_newsletter.to_csv("cr_newsletter.csv", index=False)

# Export data from /mitglied-werden
df_mitglieder = df_m[
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

# -----------------------------------------------------------------------------
# ... for FEUERWERK.net
# -----------------------------------------------------------------------------

feuerwerknet_list_m = [
    user for user in df_m["feuerwerk_net"] if user != None and user != ""
]
feuerwerknet_list_fm = [
    user for user in df_fm["f_feuerwerknet"] if user != None and user != ""
]

df_feuerwerknet = pd.DataFrame(columns=["username"])
df_feuerwerknet["username"] = feuerwerknet_list_fm + feuerwerknet_list_m
df_feuerwerknet.to_csv("feuerwerk_net.csv", index=False, header=False)

# -----------------------------------------------------------------------------
# ... for SPG Verein
# -----------------------------------------------------------------------------
