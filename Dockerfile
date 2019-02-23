FROM iron/node:dev
RUN mkdir /app
ADD . /app/
RUN npm i -g grunt-cli http-server json-server grunt > /dev/null
WORKDIR /app/src/lib
RUN npm install --loglevel=error > /dev/null
WORKDIR /app
ADD entrypoint.sh /entrypoint.sh
RUN chmod a+x /entrypoint.sh

ENTRYPOINT [ "./entrypoint.sh" ]
