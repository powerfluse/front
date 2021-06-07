#!/usr/bin/env bash
set -euo pipefail

docker-compose -f back/docker-compose.dev.yml up --detach
docker-compose -f front/docker-compose.dev.yml build --no-cache
docker-compose -f front/docker-compose.dev.yml up
