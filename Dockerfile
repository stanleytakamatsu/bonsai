FROM node:10.15.0-stretch-slim

# Ignore APT warnings about not having a TTY
LABEL maintainer="Stanley Yoshinori Takamatsu"

ENV DEBIAN_FRONTEND noninteractive
ENV HOME /home/node
ENV TZ=UTC

RUN mkdir -p /var/www \
    && mkdir -p /opt/pm2/pid

RUN chown -R node\:node /var/www \
    && chown -R node\:node /usr/local \
    && chown -R node\:node /home/node \
    && chown -R node\:node /opt/pm2/pid

RUN cd /home/node &&\
    echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc

RUN apt update \
    && apt install -y tzdata git

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN rm -rf /tmp/* \
    && rm -rf /var/www/*

COPY ./. /var/www/

RUN chown -R node\:node /var/www

USER node

ENV NPM_CONFIG_LOGLEVEL info
ENV PM2_VERSION 3.3.1
ENV TYPESCRIPT_VERSION 3.3.3333
ENV NPX_VERSION 10.2.0

RUN npm i yarn -g \
    && yarn global add pm2@$PM2_VERSION \
    && yarn global add typescript@$TYPESCRIPT_VERSION \
    && yarn global add npx@$NPX_VERSION


RUN cd /var/www/ \
    && mkdir log \
    && yarn install \
    && npm run build:prod

WORKDIR /var/www/

CMD [ "npm", "start" ]

