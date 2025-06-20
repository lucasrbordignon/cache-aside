import express, { Request, Response } from 'express';
import { getPost } from '../service/postService';

const router = express.Router();

router.get('/posts/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const post = await getPost(id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong', details: String(error) });
  }
});

export default router;
