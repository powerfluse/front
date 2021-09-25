import requests as re
import numpy as np
import os
import hashlib
import pandas as pd
from datetime import datetime

# =============================================================================
# Getting the data
# =============================================================================

NOCODB_API_URL = "https://bvpk-db.linus.cx/nc/bvpk_9YLS/api/v1/"
NOCODB_TOKEN = os.getenv("POETRY_NOCODB_TOKEN")

headers = {"xc-auth": NOCODB_TOKEN}

url_m = NOCODB_API_URL + "mitglieder?limit=500"
res_m = re.get(url_m, headers=headers)
df_m = pd.concat([pd.DataFrame([i]) for i in res_m.json()])
df_m.to_pickle("./df_m.pkl")
# df_m = pd.read_pickle("./df_m.pkl")

url_fm = NOCODB_API_URL + "firmenmitglieder?limit=500"
res_fm = re.get(url_fm, headers=headers)
df_fm = pd.concat([pd.DataFrame([i]) for i in res_fm.json()])
df_fm.to_pickle("./df_fm.pkl")
# df_fm = pd.read_pickle("./df_fm.pkl")
# print(df_fm.columns)

url_nl = NOCODB_API_URL + "newsletter?limit=500"
res_nl = re.get(url_nl, headers=headers)
df_nl = pd.concat([pd.DataFrame([i]) for i in res_nl.json()])
df_nl.to_pickle("./df_nl.pkl")
# df_nl = pd.read_pickle("./df_nl.pkl")


# =============================================================================
# Exporting the data
# =============================================================================

# -----------------------------------------------------------------------------
# ... for Cleverreach
# -----------------------------------------------------------------------------

# Newsletter sign-ups with legacy newsletter sign-up form
df_nl = df_nl.rename(columns={"nl_email": "email"})
df_nl["anrede"] = None
df_nl["vorname"] = None
df_nl["nachname"] = None
df_nl = df_nl.loc[:, ["email", "anrede", "vorname", "nachname"]]
df_nl["sign_up"] = "newsletter_signup_before_cr"

# Newsletter sign-ups from /mitglied-werden
df_newsletter = df_m[df_m.nl_consent == True]
df_newsletter = df_newsletter.loc[:, ["email", "anrede", "vorname", "nachname"]]
df_newsletter["sign_up"] = "bvpk.org/mitglied-werden"

# Merge both
df_newsletter = df_newsletter.append(df_nl, ignore_index=True)

df_newsletter.to_csv("./output/cr_newsletter.csv", index=False)

# Export member data from /mitglied-werden
df_mitglieder = df_m.loc[
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
df_mitglieder.loc[:, ["iban"]] = df_mitglieder["iban"].apply(lambda x: "****" + x[-4:])
df_mitglieder.loc[:, ["zahlungsrhythmus"]] = df_mitglieder["zahlungsrhythmus"].apply(
    lambda x: x.lower() if x else None
)
df_mitglieder.loc[:, ["sign_up"]] = "bvpk.org/mitglied-werden"
df_mitglieder.to_csv("./output/cr_mitglieder.csv", index=False)


# Export data from /mitglied-werden-firma
df_firmenmitglieder = df_fm[df_fm.f_nl_consent == True]
df_firmenmitglieder = df_firmenmitglieder.loc[
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
df_firmenmitglieder["f_iban"] = df_firmenmitglieder["f_iban"].apply(
    lambda x: "****" + x[-4:]
)
df_firmenmitglieder["sign_up"] = "bvpk.org/mitglied-werden-firma"
df_firmenmitglieder.to_csv("./output/cr_firmenmitglieder.csv", index=False)

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
df_feuerwerknet.to_csv("./output/feuerwerk_net.csv", index=False, header=False)

# -----------------------------------------------------------------------------
# ... for SPG Verein
# -----------------------------------------------------------------------------


def sanitize(input):
    x = str(input).strip().replace(";", "/")
    return x


df_spg_firmen = pd.DataFrame(
    columns=[
        "Anrede",  # Firmenname
        "Titel",
        "Vorname",
        "Nachname",
        "Zusatzaddresse",
        "Strasse",
        "PLZ",
        "Ort",
        "Geburtsdatum",
        "Telefon_Dienstlich",
        "Eintritt_Datum",
        "Zahlart",
        "Zahler",
        "DTA_1",  # Mitgliedsbeitrag
        "DTA_2",  # Verwendungszweck 2
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
    ],
)

# Establish proper indices
df_spg_firmen = df_spg_firmen.reset_index(drop=True)
df_fm = df_fm.reset_index()

df_spg_firmen.loc[:, "Nachname"] = df_fm["f_name"].apply(lambda x: x.split()[0])
df_spg_firmen.loc[:, "Vorname"] = df_fm["f_name"].apply(
    lambda x: " ".join(x.split()[1:])
)
df_spg_firmen.loc[:, "Strasse"] = df_fm["f_strasse"].apply(lambda x: sanitize(x))
df_spg_firmen.loc[:, "PLZ"] = df_fm["f_plz"].apply(
    lambda x: "0" + str(x) if len(str(x)) == 4 else str(x)
)
df_spg_firmen.loc[:, "Ort"] = df_fm["f_ort"].apply(lambda x: sanitize(x))
df_spg_firmen.loc[:, "Telefon_Dienstlich"] = df_fm["f_telefon"].apply(
    lambda x: "".join(filter(str.isdigit, x))
)
df_spg_firmen.loc[:, "Eintritt_Datum"] = df_fm["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_firmen.loc[:, "Zahlart"] = "s"
df_spg_firmen.loc[:, "Anrede"] = "Firma"
df_spg_firmen.loc[:, "Zahler"] = df_fm["f_kontoinhaber"].apply(lambda x: sanitize(x))
df_spg_firmen.loc[:, "DTA_1"] = "Mitgliedsbeitrag BvPK e.V."
df_spg_firmen.loc[:, "DTA_2"] = "Firmenbeitrag"
df_spg_firmen.loc[:, "Erhebung_ab"] = df_fm["created_at"].apply(
    lambda x: str(datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y"))
)
df_spg_firmen.loc[:, "Handy_2"] = df_fm["f_ap_telefon"].apply(
    lambda x: "".join(filter(str.isdigit, x))
)
df_spg_firmen.loc[:, "Email"] = df_fm["f_email"].apply(lambda x: sanitize(x))
df_spg_firmen.loc[:, "Homepage"] = df_fm["f_homepage"].apply(
    lambda x: sanitize(x) if x else np.nan
)
df_spg_firmen.loc[:, "IBAN_Nr"] = df_fm["f_iban"].apply(lambda x: sanitize(x))
df_spg_firmen.loc[:, "Zusatzfeld_01"] = df_fm["f_feuerwerknet"].apply(
    lambda x: sanitize(x) if x else np.nan
)
df_spg_firmen.loc[:, "Zusatzfeld_06"] = " "
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
            df_spg_firmen.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_firmen.loc[c:c, "Zusatzfeld_06"] + "GF/"
            )

        if col == "f_t_buehne" and df_fm.loc[c:c, col][c]:
            df_spg_firmen.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_firmen.loc[c:c, "Zusatzfeld_06"] + "B/"
            )

        if col == "f_t_sfx" and df_fm.loc[c:c, col][c]:
            df_spg_firmen.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_firmen.loc[c:c, "Zusatzfeld_06"] + "SFX/"
            )

        if col == "f_t_handel_gf" and df_fm.loc[c:c, col][c]:
            df_spg_firmen.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_firmen.loc[c:c, "Zusatzfeld_06"] + "HA_GF/"
            )

        if col == "f_t_handel_kf" and df_fm.loc[c:c, col][c]:
            df_spg_firmen.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_firmen.loc[c:c, "Zusatzfeld_06"] + "HA_KF/"
            )

        if col == "f_t_handel_kf_silvester" and df_fm.loc[c:c, col][c]:
            df_spg_firmen.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_firmen.loc[c:c, "Zusatzfeld_06"] + "HA_KF_S/"
            )

        if col == "f_t_handel_herstellung_de" and df_fm.loc[c:c, col][c]:
            df_spg_firmen.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_firmen.loc[c:c, "Zusatzfeld_06"] + "HE_DE/"
            )

        if col == "f_t_import" and df_fm.loc[c:c, col][c]:
            df_spg_firmen.loc[c:c, "Zusatzfeld_06"] = (
                df_spg_firmen.loc[c:c, "Zusatzfeld_06"] + "I/"
            )

        c += 1

    df_spg_firmen.loc[:, "Zusatzfeld_07"] = df_fm["f_t_sonstige"].apply(
        lambda x: sanitize(x)
    )
    df_spg_firmen.loc[:, "Abteilung_1"] = "U"
    df_spg_firmen.loc[:, "Sepa_Datum_Mandats_Ref"] = df_fm["created_at"].apply(
        lambda x: str(
            datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y")
        )
    )
    df_spg_firmen.loc[:, "Sepa_Mandats_Ref"] = df_fm["f_name"].apply(
        lambda x: "".join(x.split())[:8]
        + "-"
        + str(hashlib.md5(x.encode("UTF-8")).hexdigest())[:6]
    )
    df_spg_firmen.loc[:, "Abteilung_Eintritt_1"] = df_fm["created_at"].apply(
        lambda x: str(
            datetime.fromisoformat(x.replace("X", "T")[:-5]).strftime("%d.%m.%Y")
        )
    )
    df_spg_firmen.loc[:, "Beitragsart_1"] = "BU"
    df_spg_firmen.loc[:, "Zahlweise_1"] = df_fm["f_zahlungsrhythmus"].apply(
        lambda x: x[:1].lower()
    )
    df_spg_firmen.loc[:, "Zusatzbetrag"] = df_fm.apply(
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
    df_spg_firmen.loc[:, "Post_Anrede"] = df_fm["f_ap_anrede"].apply(
        lambda x: np.nan if x == "keine Angabe" else sanitize(x)
    )
    df_spg_firmen.loc[:, "Post_Vorname"] = df_fm["f_ap_vorname"].apply(
        lambda x: sanitize(x)
    )
    df_spg_firmen.loc[:, "Post_Nachname"] = df_fm["f_ap_nachname"].apply(
        lambda x: sanitize(x)
    )
    df_spg_firmen.loc[:, "Brief_Anrede"] = df_spg_firmen["Post_Anrede"].apply(
        lambda x: "er " + sanitize(x) + " "
        if x == "Herr"
        else ("e " + sanitize(x) + " " if x == "Frau" else "")
    ) + df_spg_firmen["Post_Nachname"].apply(lambda x: sanitize(x) + ",")

# pd.set_option("display.max_rows", None, "display.max_columns", None)
# print(df_spg_firmen)
df_spg_firmen.to_csv(
    "./output/spg_firmen.csv",
    sep=";",
    float_format="%.2f",
    index=False,
    encoding="utf-8-sig",
)
