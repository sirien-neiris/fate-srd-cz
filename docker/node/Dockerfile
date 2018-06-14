FROM node:alpine
RUN yarn global add vuepress

RUN apk --update add git openssh && \
    rm -rf /var/lib/apt/lists/* && \
    rm /var/cache/apk/*

WORKDIR /var/www/html/src

 CMD vuepress build
# CMD LOCAL_IP=`hostname -i` vuepress dev