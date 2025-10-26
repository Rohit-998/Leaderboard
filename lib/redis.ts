import Redis from "ioredis";

const redisHost = process.env.REDIS_HOST!;
const redisPort = Number(process.env.REDIS_PORT || 6379);

// Make a singleton Redis instance safely
let client: Redis;

declare global {
  // Allow global var in Next.js hot reload
  // eslint-disable-next-line no-var
  var _redis: Redis | undefined;
}

if (!global._redis) {
  global._redis = new Redis({
    host: redisHost,
    port: redisPort,
    // Uncomment below if your Redis uses TLS (e.g. MemoryDB or some ElastiCache configs)
    // tls: {}
  });
}

client = global._redis;

export default client;
