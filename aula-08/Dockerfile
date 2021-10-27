FROM node:17-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src ./src
EXPOSE 8087
CMD ["npm", "start"]
