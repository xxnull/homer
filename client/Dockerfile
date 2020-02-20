FROM node:13.8.0-alpine3.10
RUN apk update \
    && apk add --virtual build-dependencies \
        build-base \
        gcc \
        wget \
        git \
    && apk add \
        bash
RUN mkdir -p /app/homer/client
WORKDIR /app/homer/client
COPY package*.json /app/homer/client/
RUN npm install
COPY . /app/homer/client/
EXPOSE 3000
CMD [ "npm", "start"]
