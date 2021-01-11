// /api/v1/post/~~~ 라우팅
// 라우터는 HTTP Method + path만을 관리함
import express, {Router} from 'express';
import * as postController from '../../../controllers/post.controller';

const router: Router = express.Router();

router.get('/', postController.getPosts); // GET /api/v1/post
router.post('/', postController.addPost); // POST /api/v1/post

export default router;
