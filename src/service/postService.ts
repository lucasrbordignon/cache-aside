import { getFromCache, setToCache } from '../cache/memoryCache';
import { fetchPostFromApi } from '../client/apiClient';
import { Post } from '../types/post';

export async function getPost(id: number): Promise<Post> {
  const cacheKey = `post:${id}`;
  const cached = await getFromCache<Post>(cacheKey);

  if (cached) {
    console.log(`Cache hit for post ${id}`);
    return cached;
  }

  console.log(`Cache miss for post ${id}. Fetching from API...`);
  const post = await fetchPostFromApi(id);
  setToCache<Post>(cacheKey, post);
  return post;
}
