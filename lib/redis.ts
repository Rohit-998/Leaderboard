import Redis from "ioredis";

const redisHost = process.env.REDIS_HOST!;
const redisPort = Number(process.env.REDIS_PORT || 6379);

// Create a singleton Redis client (important for hot reloads)
let redis: Redis | null = null;

if (!redis) {
  redis = new Redis({
    host: redisHost,
    port: redisPort,
    // You can add optional TLS if your ElastiCache requires it:
    // tls: {}
  });
}

export default redis;
