FROM node:lts-alpine3.20
WORKDIR /app
COPY . .
RUN npm install
ENV API_URL=https://jsonplaceholder.typicode.com/posts
EXPOSE 3000
RUN addgroup app && adduser -S -G app app
USER app
CMD [ "npm","start" ]




