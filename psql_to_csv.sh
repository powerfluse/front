#!/usr/bin/env bash
set -euo pipefail

CONTAINER="name"
DB="Db name"
TABLE="Table Name"
FILE="file.csv"

sudo docker exec -u postgres "${CONTAINER}" psql -d "${DB}" -c "COPY ${TABLE} TO STDOUT WITH CSV HEADER " > "${FILE}"
