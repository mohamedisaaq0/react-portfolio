# ---- build stage ----
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# CRA needs REACT_APP_* at build time; if you used it, set in Coolify build vars
RUN npm run build

# ---- runtime ----
FROM nginx:stable-alpine
# SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
