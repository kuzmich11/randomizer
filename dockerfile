# Базовый образ с Node.js версии 16 (можно выбрать другую версию)
FROM node:22

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка React и необходимых зависимостей
RUN npm install --save react react-dom

# Установка зависимостей
RUN npm install --omit=dev

# Копирование остальных файлов проекта
COPY . .

# Экспозиция порта (стандартный порт для Node.js приложений)
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]
