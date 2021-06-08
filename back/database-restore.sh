#!/usr/bin/env bash
set -euo pipefail

cat ${DUMPFILE} | docker exec -i database psql -U directus
