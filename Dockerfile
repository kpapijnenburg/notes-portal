FROM node:lts-alpine as build-stage

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# Configure the environment variables to use values from a docker-compose file.
ENV VUE_APP_NOTES_SERVER=$VUE_APP_NOTES_SERVER
ENV VUE_APP_HANDWRITING_SERVER=$VUE_APP_HANDWRITING_SERVER
ENV VUE_APP_IDENTITY_SERVER=$VUE_APP_IDENTITY_SERVER

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]