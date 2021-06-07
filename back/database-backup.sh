#!/usr/bin/env bash
set -euo pipefail

docker exec -t database pg_dumpall -c -U directus >dump_$(date +%d-%m-%Y"_"%H_%M_%S).sql
