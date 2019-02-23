# docker exec -it daily_journal -w /code/src/lib sh -c "npm install"

# docker run -it --rm -v "$(pwd)":/app -w /app/src/lib daily_journal sh -c 'npm i -g grunt-cli http-server json-server && npm install'
docker run -it daily_journal sh -c 'npm i -g grunt-cli http-server json-server && npm install'