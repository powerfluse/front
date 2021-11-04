import requests as re
import numpy as np
import os
import hashlib
import pandas as pd
from datetime import datetime, date

# =============================================================================
# Getting the data
# =============================================================================

NOCODB_API_URL = "https://db.bvpk.net/nc/bvpk_9YLS/api/v1/"
NOCODB_TOKEN = os.getenv("POETRY_NOCODB_TOKEN")

headers = {"xc-auth": NOCODB_TOKEN}


url_m = NOCODB_API_URL + "mitglieder?limit=500"
res_m = re.get(url_m, headers=headers)
df_m = pd.concat([pd.DataFrame([i]) for i in res_m.json()])
# df_m.to_pickle("./df_m.pkl")
# df_m = pd.read_pickle("./df_m.pkl")

url_fm = NOCODB_API_URL + "firmenmitglieder?limit=500"
res_fm = re.get(url_fm, headers=headers)
df_fm = pd.concat([pd.DataFrame([i]) for i in res_fm.json()])
# df_fm.to_pickle("./df_fm.pkl")
# df_fm = pd.read_pickle("./df_fm.pkl")
# print(df_fm.columns)

url_nl_legacy = NOCODB_API_URL + "newsletter?limit=500"
res_nl_legacy = re.get(url_nl_legacy, headers=headers)
df_nl_legacy = pd.concat([pd.DataFrame([i]) for i in res_nl_legacy.json()])
# df_nl_legacy.to_pickle("./df_nl_legacy.pkl")
# df_nl = pd.read_pickle("./df_nl.pkl")

today = date.today()

# =============================================================================
# Exporting the data
# =============================================================================

# -----------------------------------------------------------------------------
# ... for Cleverreach
# -----------------------------------------------------------------------------

# Newsletter sign-ups with legacy newsletter sign-up form
df_nl_legacy = df_nl_legacy.rename(columns={"nl_email": "email"})
df_nl_legacy["anrede"] = None
df_nl_legacy["vorname"] = None
df_nl_legacy["nachname"] = None
df_nl_legacy = df_nl_legacy.loc[:, ["email", "anrede", "vorname", "nachname"]]
df_nl_legacy["sign_up"] = "newsletter_signup_before_cr"

# Newsletter sign-ups from /mitglied-werden
df_nl_m = df_m[df_m.nl_consent == True]
df_nl_m = df_nl_m.loc[:, ["email", "anrede", "vorname", "nachname"]]
df_nl_m["sign_up"] = "bvpk.org/mitglied-werden"

# Newsletter sign-ups from /mitglied-werden-firma
df_nl_fm = df_fm[df_fm.f_nl_consent == True]
df_nl_fm = df_nl_fm.loc[:, ["f_email", "f_ap_anrede", "f_ap_vorname", "f_ap_nachname"]]
df_nl_fm = df_nl_fm.rename(
    columns={
        "f_email": "email",
        "f_ap_anrede": "anrede",
        "f_ap_vorname": "vorname",
        "f_ap_nachname": "nachname",
    }
)
df_nl_fm["sign_up"] = "bvpk.org/mitglied-werden-firma"

# Merge all
df_nl = df_nl_legacy.append([df_nl_m, df_nl_fm], ignore_index=True)
df_nl.to_csv(f"cleverreach/{today}_newsletter.csv", index=False)

# Export member data from /mitglied-werden
# to welcome new private members
df_cr_m = df_m.loc[
    :,
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
        "geburtsdatum",
    ],
]
df_cr_m.loc[:, ["iban"]] = df_cr_m["iban"].apply(lambda x: "****" + x[-4:])
df_cr_m.loc[:, ["zahlungsrhythmus"]] = df_cr_m["zahlungsrhythmus"].apply(
    lambda x: x.lower() if x else None
)
df_cr_m.loc[:, ["sign_up"]] = "bvpk.org/mitglied-werden"
df_cr_m.to_csv(f"cleverreach/{today}_mitglieder.csv", index=False)

# Export data from /mitglied-werden-firma
# to welcome new corporate members
df_cr_fm = df_fm.loc[
    :,
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
    ],
]
df_cr_fm["f_iban"] = df_cr_fm["f_iban"].apply(lambda x: "****" + x[-4:])
df_cr_fm["f_zahlungsrhythmus"] = df_fm["f_zahlungsrhythmus"].apply(
    lambda x: x.lower() if x else None
)
df_cr_fm["sign_up"] = "bvpk.org/mitglied-werden-firma"
df_cr_fm.to_csv(
    f"cleverreach/{today}_firmenmitglieder.csv",
    index=False,
)

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
df_feuerwerknet.to_csv(f"feuerwerknet/{today}_all.csv", index=False, header=False)

pd.set_option("display.max_rows", None, "display.max_columns", None)

# -----------------------------------------------------------------------------
# ... for SPG Verein
# -----------------------------------------------------------------------------

# a function to strip whitespace and remove semicolons
def sanitize(input):
    x = str(input).strip().replace(";", "/")
    return x


# in the end, SPG is just one big DB. So let's create one big CSV
df_spg = pd.DataFrame(
    columns=[
        "Anrede",
        "Titel",
        "Vorname",
        "Nachname",
        "Zusatzaddresse",
        "Strasse",
        "PLZ",
        "Ort",
        "Geburtsdatum",
        "Telefon_Privat",
        "Telefon_Dienstlich",
        "Eintritt_Datum",
        "Zahlart",
        "Zahler",
        "DTA_1",
        "DTA_2",
        "Erhebung_ab",
        "Handy_2",
        "Email",
        "Homepage",
        "IBAN_Nr",
        "BIC_Nr",
        "Zusatzfeld_01",  # NIC Feuerwerksforum
        "Zusatzfeld_05",  # Erlaubnis/Befähigung nach SprengG
        "Zusatzfeld_06",  # Bühne/F3/SFX/GroßF
        "Zusatzfeld_07",  # weitere Bereiche
        "Zusatzfeld_08",  # Ergänzungen
        "Sepa_Datum_Mandats_Ref",
        "Sepa_Mandats_Ref",
        "Abteilung_1",
        "Abteilung_Eintritt_1",
        "Beitragsart_1",
        "Zahlweise_1",
        "Einmalbetrag_1",
        "Einmalbetrag_2",
        "Zusatzbetrag",
        "Post_Anrede",
        "Post_Vorname",
        "Post_Nachname",
        "Brief_Anrede",
    ],
)

# Let's start with corporate members
df_spg_fm = df_spg

df_spg_fm = df_spg_fm.reset_index(drop=True)
df_fm = df_fm.reset_index()

df_spg_fm.loc[:, "Nachname"] = df_fm["f_name"].apply(lambda x: x.split()[0])
df_spg_fm.loc[:, "Vorname"] = df_fm["f_name"].apply(lambda x: " ".join(x.split()[1:]))
df_spg_fm.loc[:, "Strasse"] = df_fm["f_strasse"].apply(lambda x: sanitize(x))
df_spg_fm.loc[:, "PLZ"] = df_fm["f_plz"].apply(lambda x: sanitize(x))
df_spg_fm.loc[:, "Ort"] = df_fm["f_ort"].apply(lambda x: sanitize(x))
df_spg_fm.loc[:, "Telefon_Dienstlich"] = df_fm["f_telefon"].apply(
    lambda x: "".join(filter(str.isdigit, x))
)
df_spg_fm.loc[:, "Eintritt_Datum"] = df_fm["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_fm.loc[:, "Zahlart"] = "s"
df_spg_fm.loc[:, "Anrede"] = "Firma"
df_spg_fm.loc[:, "Zahler"] = df_fm["f_kontoinhaber"].apply(lambda x: sanitize(x))
df_spg_fm.loc[:, "DTA_1"] = "Mitgliedsbeitrag BvPK e.V."
df_spg_fm.loc[:, "DTA_2"] = "Firmenbeitrag"
df_spg_fm.loc[:, "Erhebung_ab"] = df_fm["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_fm.loc[:, "Handy_2"] = df_fm["f_ap_telefon"].apply(
    lambda x: "".join(filter(str.isdigit, x))
)
df_spg_fm.loc[:, "Email"] = df_fm["f_email"].apply(lambda x: sanitize(x))
df_spg_fm.loc[:, "Homepage"] = df_fm["f_homepage"].apply(
    lambda x: sanitize(x) if x else np.nan
)
df_spg_fm.loc[:, "IBAN_Nr"] = df_fm["f_iban"].apply(lambda x: sanitize(x))
df_spg_fm.loc[:, "Zusatzfeld_01"] = df_fm["f_feuerwerknet"].apply(
    lambda x: sanitize(x) if x else np.nan
)
df_spg_fm.loc[:, "Zusatzfeld_06"] = " "
for col in df_fm.loc[
    :,
    [
        "f_t_gf",
        "f_t_buehne",
        "f_t_sfx",
        "f_t_handel_gf",
        "f_t_handel_kf",
        "f_t_handel_kf_silvester",
        "f_t_herstellung_de",
        "f_t_sonstige",
    ],
]:
    c = 0
    for row in df_fm.loc[:, col]:
        if col == "f_t_gf" and df_fm.loc[c:c, col][c]:
            df_spg_fm.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_fm.loc[c:c, "Zusatzfeld_06"] + "GF/"
            )

        if col == "f_t_buehne" and df_fm.loc[c:c, col][c]:
            df_spg_fm.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_fm.loc[c:c, "Zusatzfeld_06"] + "B/"
            )

        if col == "f_t_sfx" and df_fm.loc[c:c, col][c]:
            df_spg_fm.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_fm.loc[c:c, "Zusatzfeld_06"] + "SFX/"
            )

        if col == "f_t_handel_gf" and df_fm.loc[c:c, col][c]:
            df_spg_fm.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_fm.loc[c:c, "Zusatzfeld_06"] + "HA_GF/"
            )

        if col == "f_t_handel_kf" and df_fm.loc[c:c, col][c]:
            df_spg_fm.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_fm.loc[c:c, "Zusatzfeld_06"] + "HA_KF/"
            )

        if col == "f_t_handel_kf_silvester" and df_fm.loc[c:c, col][c]:
            df_spg_fm.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_fm.loc[c:c, "Zusatzfeld_06"] + "HA_KF_S/"
            )

        if col == "f_t_handel_herstellung_de" and df_fm.loc[c:c, col][c]:
            df_spg_fm.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_fm.loc[c:c, "Zusatzfeld_06"] + "HE_DE/"
            )

        if col == "f_t_import" and df_fm.loc[c:c, col][c]:
            df_spg_fm.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_fm.loc[c:c, "Zusatzfeld_06"] + "I/"
            )

        c += 1

df_spg_fm.loc[:, "Zusatzfeld_07"] = df_fm["f_t_sonstige"].apply(lambda x: sanitize(x))
df_spg_fm.loc[:, "Abteilung_1"] = "U"
df_spg_fm.loc[:, "Sepa_Datum_Mandats_Ref"] = df_fm["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_fm.loc[:, "Sepa_Mandats_Ref"] = df_fm["f_name"].apply(
    lambda x: "".join(x.split())[:8]
    + "-"
    + str(hashlib.md5(x.encode("UTF-8")).hexdigest())[:6]
)
df_spg_fm.loc[:, "Abteilung_Eintritt_1"] = df_fm["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_fm.loc[:, "Beitragsart_1"] = "BU"
df_spg_fm.loc[:, "Zahlweise_1"] = df_fm["f_zahlungsrhythmus"].apply(
    lambda x: x[:1].lower()
)
df_spg_fm.loc[:, "Zusatzbetrag"] = df_fm.apply(
    lambda x: (
        (float(x["f_beitrag"]) - 150) / 2
        if x["f_zahlungsrhythmus"] == "Halbjährlich"
        else (
            (float(x["f_beitrag"]) - 150) / 4
            if x["f_zahlungsrhythmus"] == "Vierteljährlich"
            else (float(x["f_beitrag"]) - 150)
        )
    ),
    axis=1,
)
df_spg_fm.loc[:, "Post_Anrede"] = df_fm["f_ap_anrede"].apply(
    lambda x: np.nan if x == "keine Angabe" else sanitize(x)
)
df_spg_fm.loc[:, "Post_Vorname"] = df_fm["f_ap_vorname"].apply(lambda x: sanitize(x))
df_spg_fm.loc[:, "Post_Nachname"] = df_fm["f_ap_nachname"].apply(lambda x: sanitize(x))
df_spg_fm.loc[:, "Brief_Anrede"] = df_spg_fm["Post_Anrede"].apply(
    lambda x: "er " + sanitize(x) + " "
    if x == "Herr"
    else ("e " + sanitize(x) + " " if x == "Frau" else "")
) + df_spg_fm["Post_Nachname"].apply(lambda x: sanitize(x) + ",")


# Ok, next are regular members

df_spg_m = df_spg
df_spg_m = df_spg_m.reset_index(drop=True)
df_m = df_m.reset_index()

df_spg_m.loc[:, "Nachname"] = df_m["nachname"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "Vorname"] = df_m["vorname"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "Titel"] = df_m["titel"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "Strasse"] = df_m["strasse"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "PLZ"] = df_m["plz"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "Ort"] = df_m["ort"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "Geburtsdatum"] = df_m["geburtsdatum"].apply(
    lambda x: sanitize(x) if x else np.nan
)
df_spg_m.loc[:, "Telefon_Privat"] = df_m["telefon"].apply(
    lambda x: "".join(filter(str.isdigit, x))
)
df_spg_m.loc[:, "Eintritt_Datum"] = df_m["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_m.loc[:, "Zahlart"] = "s"
df_spg_m.loc[:, "Anrede"] = df_m["anrede"].apply(
    lambda x: np.nan if (x == "keine Angabe" or x == "Divers") else sanitize(x)
)
df_spg_m.loc[:, "Zahler"] = df_m["kontoinhaber"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "DTA_1"] = "Mitgliedsbeitrag BvPK e.V."
df_spg_m.loc[:, "DTA_2"] = df_m.apply(
    lambda x: (
        "Förderbeitrag"
        if x["foerderbeitrag"] and not x["feuerwerk_versicherung"]
        else (
            "Förderbeitrag + Versicherung"
            if x["foerderbeitrag"] and x["feuerwerk_versicherung"]
            else np.nan
        )
    ),
    axis=1,
)
df_spg_m.loc[:, "Erhebung_ab"] = df_m["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_m.loc[:, "Email"] = df_m["email"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "IBAN_Nr"] = df_m["iban"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "Zusatzfeld_01"] = df_m["feuerwerk_net"].apply(
    lambda x: sanitize(x) if x else np.nan
)
df_spg_m.loc[:, "Zusatzfeld_05"] = " "
for col in df_m.loc[
    :,
    [
        "feuerwerk_para_20",
        "feuerwerk_para_27",
        "feuerwerk_para_7",
    ],
]:
    c = 0
    for row in df_m.loc[:, col]:
        if col == "feuerwerk_para_20" and df_m.loc[c:c, col][c]:
            df_spg_m.loc[c:c, "Zusatzfeld_05"] = (
                df_spg_m.loc[c:c, "Zusatzfeld_05"] + "§20/"
            )

        if col == "feuerwerk_para_27" and df_m.loc[c:c, col][c]:
            df_spg_m.loc[c:c, "Zusatzfeld_05"] = (
                df_spg_m.loc[c:c, "Zusatzfeld_05"] + "§27/"
            )

        if col == "feuerwerk_para_7" and df_m.loc[c:c, col][c]:
            df_spg_m.loc[c:c, "Zusatzfeld_05"] = (
                df_spg_m.loc[c:c, "Zusatzfeld_05"] + "§7"
            )
        c += 1

df_spg_m.loc[:, "Zusatzfeld_06"] = " "
for col in df_m.loc[
    :,
    [
        "feuerwerk_f3",
        "feuerwerk_buehne",
        "feuerwerk_gf",
        "feuerwerk_sfx",
    ],
]:
    c = 0
    for row in df_m.loc[:, col]:
        if col == "feuerwerk_f3" and df_m.loc[c:c, col][c]:
            df_spg_m.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_m.loc[c:c, "Zusatzfeld_06"] + "F3/"
            )
        if col == "feuerwerk_buehne" and df_m.loc[c:c, col][c]:
            df_spg_m.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_m.loc[c:c, "Zusatzfeld_06"] + "B/"
            )
        if col == "feuerwerk_gf" and df_m.loc[c:c, col][c]:
            df_spg_m.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_m.loc[c:c, "Zusatzfeld_06"] + "GF/"
            )
        if col == "feuerwerk_sfx" and df_m.loc[c:c, col][c]:
            df_spg_m.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_m.loc[c:c, "Zusatzfeld_06"] + "SFX"
            )
        c += 1

df_spg_m.loc[:, "Abteilung_1"] = df_m.apply(
    lambda x: (
        "F" if x["foerderbeitrag"] else ("V" if x["feuerwerk_versicherung"] else "M")
    ),
    axis=1,
)
df_spg_m.loc[:, "Beitragsart_1"] = df_m.apply(
    lambda x: ("FB" if x["foerderbeitrag"] else "MB"), axis=1
)
df_spg_m.loc[:, "Abteilung_2"] = df_m.apply(
    lambda x: (
        "F"
        if x["foerderbeitrag"] and x["feuerwerk_versicherung"]
        else ("V" if x["feuerwerk_versicherung"] else np.nan)
    ),
    axis=1,
)
df_spg_m.loc[:, "Beitragsart_2"] = df_m.apply(
    lambda x: ("VB" if x["feuerwerk_versicherung"] else np.nan), axis=1
)
df_spg_m.loc[:, "Sepa_Datum_Mandats_Ref"] = df_m["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_m.loc[:, "Sepa_Mandats_Ref"] = df_m["nachname"].apply(
    lambda x: "".join(x.split())[:4]
    + "-"
    + str(hashlib.md5(x.encode("UTF-8")).hexdigest())[:10]
)
df_spg_m.loc[:, "Abteilung_Eintritt_1"] = df_m["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_m.loc[:, "Zahlweise_1"] = df_m["zahlungsrhythmus"].apply(
    lambda x: x[:1].lower() if x else "j"
)
df_spg_m.loc[:, "Zusatzbetrag"] = df_m.apply(
    lambda x: (
        (
            float(x["foerderbeitrag"].replace(",", ".")) / 2
            if x["zahlungsrhythmus"] == "Halbjährlich" and x["foerderbeitrag"]
            else (
                float(x["foerderbeitrag"].replace(",", ".")) / 4
                if x["zahlungsrhythmus"] == "Vierteljährlich" and x["foerderbeitrag"]
                else (
                    float(x["foerderbeitrag"].replace(",", "."))
                    if x["foerderbeitrag"]
                    else np.nan
                )
            )
        )
    ),
    axis=1,
)
df_spg_m.loc[:, "Post_Anrede"] = df_m["anrede"].apply(
    lambda x: np.nan if x == "keine Angabe" else sanitize(x)
)
df_spg_m.loc[:, "Post_Vorname"] = df_m["vorname"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "Post_Nachname"] = df_m["nachname"].apply(lambda x: sanitize(x))
df_spg_m.loc[:, "Brief_Anrede"] = df_spg_m["Post_Anrede"].apply(
    lambda x: "er " + sanitize(x) + " "
    if x == "Herr"
    else ("e " + sanitize(x) + " " if x == "Frau" else "")
) + df_spg_m["Post_Nachname"].apply(lambda x: sanitize(x) + ",")

# Debugging
# print(df_spg_m) # ===========================================================

# Merge
df_spg = df_spg_fm.append(df_spg_m, ignore_index=True)

# Finally, export everything to CSV
df_spg.to_csv(
    f"spg/{today}_spg.csv",
    sep=";",
    float_format="%.2f",
    index=False,
    encoding="iso8859_15",
)

print("=== Export finished without errors ===")
