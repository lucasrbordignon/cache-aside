import axios from 'axios';
import { Post } from '../types/post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchPostFromApi(id: number): Promise<Post> {
  const response = await axios.get<Post>(`${BASE_URL}/posts/${id}`);
  return response.data;
}
