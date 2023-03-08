FROM node:18-alpine
WORKDIR /movies
ADD package*.json ./
RUN  npm i --legacy-peer-deps
ADD . .

EXPOSE 3000

CMD ["npm","start"]