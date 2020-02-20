FROM node:13.8.0-alpine3.10
RUN apk update \
    && apk add --virtual build-dependencies \
        build-base \
        gcc \
        wget \
        git \
    && apk add \
        bash
RUN mkdir -p /app/homer/server
WORKDIR /app/homer/server
COPY package*.json /app/homer/server/
RUN npm install
COPY . /app/homer/server/
CMD [ "npm", "start"]
