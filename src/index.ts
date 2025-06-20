import express from 'express';
import postController from './controller/postController';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', postController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
