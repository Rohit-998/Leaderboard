FROM node:21-slim
WORKDIR /app

ENV NPM_CONFIG_LEGACY_PEER_DEPS=true

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

# Install curl for ECS health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Start Next.js server on 0.0.0.0
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]
