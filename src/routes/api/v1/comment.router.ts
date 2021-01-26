import express, {Router} from 'express';
import * as commentController from '../../../controllers/comment.controller';

const router: Router = express.Router();

router.delete('/:postId/comments/:commentId', commentController.deleteComment);//DELETE api/v1/post/:postId/comments/:commentId
router.post('/:postId/comments', commentController.addComment);//POST api/v1/post/:postId/comments

export default router;