// /api/v1 라우팅
import express, {Router} from 'express';
import postRouter from './post.router';

const router: Router = express.Router();

router.use('/post', postRouter);

export default router;
