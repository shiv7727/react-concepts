FROM node:lts-alpine3.20
WORKDIR /app
COPY . .
RUN npm install
ENV API_URL=https://jsonplaceholder.typicode.com/posts


