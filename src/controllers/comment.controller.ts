// 이곳은 req, res만을 관리함 (controller)
// req로부터 params 및 body를 꺼내서 service 영역으로 전달 & service로부터 데이터를 받아옴
import {Request, Response, NextFunction} from 'express';
import * as commentService from '../services/comment.service';

export async function addComment(req: Request, res: Response, next: NextFunction) {
  try {
    const postId = Number(req.params.postId);
    const content: string = req.body.content;
    if(!postId || !content){
      throw Error('Invalid body');
    }
    const comment = await commentService.addComment(postId, content);
    res.status(200).send({postId, comment});
  } catch (err) {
    res.status(500).send(`Error while find comments (${err.message})`);
  }
}
