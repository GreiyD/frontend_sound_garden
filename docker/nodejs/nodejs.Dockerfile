FROM node:23-alpine3.19

ARG WORKDIR
WORKDIR ${WORKDIR}

COPY ./app/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

#ENV PATH="./node_modules/.bin:$PATH"   мб имеет смысл расскомитеть

CMD [ "npm", "run", "dev"]