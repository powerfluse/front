#!/usr/bin/env bash
set -euo pipefail

docker-compose -f front/docker-compose.dev.yml build --no-cache
docker-compose -f front/docker-compose.dev.yml up
