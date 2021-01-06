FROM node:14.15.1-alpine3.12
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
CMD sh
