FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
CMD ["npm", "run", "dev"]