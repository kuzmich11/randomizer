FROM node:latest

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Если нужно установить react-scripts отдельно:
RUN npm install react-scripts --save-dev

# Копирование остальных файлов проекта
COPY . .

# Экспозиция порта (стандартный порт для Node.js приложений)
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "start"]
