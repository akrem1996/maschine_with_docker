FROM node:14 as build-stage
USER root
COPY package*.json ./
RUN npm install
COPY . .
RUN  npm run build
#Use the lase stable version of nginx 
FROM nginx:1.20.1 as deploy-stage
#Replace the nginx html folder by the generated build package of the build-stage 
COPY --from=build-stage /build/ /usr/share/nginx/html
#Replace the nginx default configuration by our sepcefic nginx.conf
COPY /config/http/nginx.conf /etc/nginx/conf.d/default.conf
#I did not add a CMD to the Dockerfile as it use the underlying CMD provided by the base NGINX image.
