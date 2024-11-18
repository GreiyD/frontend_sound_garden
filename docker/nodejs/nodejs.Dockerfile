FROM node:23-alpine3.19

ARG WORKDIR
WORKDIR ${WORKDIR}

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev"]