#!/usr/bin/env bash
set -euo pipefail

sudo docker-compose -f front/docker-compose.dev.yml build --no-cache
sudo docker-compose -f front/docker-compose.dev.yml up
