FROM node:18-alpine
WORKDIR /app
COPY package.json,package-lock.json .
RUN npm install
COPY . .
EXPOSE  19531
CMD ["npm" ,"start"]

