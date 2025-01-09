FROM node:23.1.0

WORKDIR /app

COPY package.json /app

RUN npm install
RUN npm install -g typescript

COPY . .

CMD ["npm", "run", "dev"]