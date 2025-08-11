# ---- build stage ----
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json if present
COPY package*.json ./
# Use npm install because there's no package-lock.json in repo
RUN npm install

# Copy all source files
COPY . .

# Build the React app
RUN npm run build

# ---- runtime ----
FROM nginx:stable-alpine
# SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx listens on port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
