FROM node:alpine

RUN apk --update add git openssh && \
    rm -rf /var/lib/apt/lists/* && \
    rm /var/cache/apk/*

WORKDIR /var/www/html
RUN npm install -g vuepress@next
RUN npm install markdown-it-deflist
RUN npm install markdown-it-container
#RUN npm install @vuepress/plugin-last-updated

WORKDIR /var/www/html

# CMD vuepress build
# CMD LOCAL_IP=`hostname -i` vuepress dev

CMD if [ "$DEV" = "1" ]; then \
        LOCAL_IP=`hostname -i` vuepress dev src; \
    else \
        vuepress build src; \
    fi;