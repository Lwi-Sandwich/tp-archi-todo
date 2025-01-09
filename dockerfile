FROM node:23.1.0

WORKDIR /app

# Configurer un miroir rapide (facultatif)
RUN npm config set registry https://registry.npmmirror.com

# Copier uniquement les fichiers nécessaires
COPY package*.json ./

# Installer les dépendances (utilise le cache Docker)
RUN npm ci

# Installer TypeScript globalement
RUN npm install -g typescript

# Copier le reste des fichiers sources
COPY . .

CMD ["npm", "run", "dev"]
