# ---- build stage ----
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ---- runtime ----
FROM nginx:stable-alpine
# SPA-ready server config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Static files
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
