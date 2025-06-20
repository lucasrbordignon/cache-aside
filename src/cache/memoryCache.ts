import { createClient } from 'redis';

const redisClient = createClient({
  url: 'redis://localhost:6379'
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

redisClient.connect();

export async function getFromCache<T>(key: string): Promise<T | undefined> {
  const data = await redisClient.get(key);
  return data ? (JSON.parse(data) as T) : undefined;
}

export async function setToCache<T>(key: string, value: T, expiration = 60): Promise<void> {
  await redisClient.set(key, JSON.stringify(value), {
    EX: expiration,
  });
}