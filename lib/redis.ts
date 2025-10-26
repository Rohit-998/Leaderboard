import Redis from "ioredis";

let client: Redis | null = null;

// Only initialize Redis if we are NOT in build-time (like in Docker build)
if (process.env.NODE_ENV !== "production" || process.env.REDIS_HOST) {
  const redisHost = process.env.REDIS_HOST!;
  const redisPort = Number(process.env.REDIS_PORT || 6379);

  client = new Redis({
    host: redisHost,
    port: redisPort,
    // tls: {}  // uncomment if using TLS
  });

  client.on("error", (err) => {
    console.warn("[Redis] Connection failed:", err.message);
  });
}

export default client;
