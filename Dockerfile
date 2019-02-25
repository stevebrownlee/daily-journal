FROM iron/node:dev

RUN mkdir /app
WORKDIR /app

RUN npm i -g grunt-cli http-server json-server

# ADD entrypoint.sh /entrypoint.sh
# RUN chmod a+x /entrypoint.sh
# ENTRYPOINT [ "/entrypoint.sh" ]

EXPOSE 8080
EXPOSE 8088
