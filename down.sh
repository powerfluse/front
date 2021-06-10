#!/usr/bin/env bash
set -euo pipefail

docker-compose -f front/docker-compose.yml down --remove-orphans
docker system prune
