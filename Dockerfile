FROM node:21-slim
WORKDIR /app

ENV NPM_CONFIG_LEGACY_PEER_DEPS=true

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy app sources and build
COPY . .
RUN npm run build

# Expose container port
EXPOSE 3000

# Start Next.js server on 0.0.0.0
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]
