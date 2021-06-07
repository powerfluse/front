#!/usr/bin/env bash
set -euo pipefail

docker-compose -f back/docker-compose.dev.yml down --remove-orphans
docker-compose -f front/docker-compose.yml down --remove-orphans
