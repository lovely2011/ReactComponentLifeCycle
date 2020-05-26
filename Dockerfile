# Stage 1- Building stage with Node.js- build and compile the app
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

# Stage 2-based on Nginx, contains only the compiled app, ready for production with Nginx server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 60
CMD ["nginx", "-g", "daemon off;"]
