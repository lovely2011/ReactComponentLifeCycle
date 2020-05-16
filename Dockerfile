FROM node:10 AS build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn build

# Run using npm
# RUN mkdir /app
# WORKDIR /app
# COPY package*.json /app/
# RUN npm install
# COPY . ./
# RUN npm run build

FROM nginx:1.13.12-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]