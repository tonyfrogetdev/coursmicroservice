# Utilise une image officielle de Node.js
FROM node:18

# Crée le dossier de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json (si présent)
COPY package*.json ./

# Installe les dépendances avec --legacy-peer-deps pour éviter les conflits
RUN npm install --legacy-peer-deps

# Copie tout le reste du code source dans le conteneur
COPY . .

# Expose le port utilisé par le microservice auth
EXPOSE 8081

# Lance le serveur
CMD ["node", "server.js"]
