import Redis from "ioredis";

const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT || "6379";

let redis: Redis | null = null;

if (REDIS_HOST) {
  redis = new Redis({
    host: REDIS_HOST,
    port: Number(REDIS_PORT),
    tls: {}, // Required for AWS ElastiCache
  });
} else {
  console.warn("Redis host not found — running without Redis");
}

export default redis;
