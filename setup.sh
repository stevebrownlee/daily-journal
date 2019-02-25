#!/bin/bash

docker build -t daily_journal .

docker run -it \
    -v "$(pwd)":/app \
    --rm \
    -p 8080:8080 \
    -p 8088:8088 \
    -w /app/src/lib \
    daily_journal \
    npm install --loglevel=error

