# Этап сборки
FROM node:22 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

# Этап продакшена
FROM node:22-slim
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
