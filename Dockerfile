FROM node:21-slim
WORKDIR /app


ENV NPM_CONFIG_LEGACY_PEER_DEPS=true


COPY package*.json ./

RUN npm ci 

# copy app sources and build
COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]
