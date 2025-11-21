import Redis from "ioredis"
import dotenv from "dotenv"

dotenv.config(); 

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  connectTimeout: 20000, // 10 seconds
  retryStrategy(times) {
    const delay = Math.min(times * 100, 2000);
    return delay;
  }
});
