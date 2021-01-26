// entity를 import하여 비즈니스 로직을 구성(sevice)
import { Comment } from '../entities/comment.entity';
import { Post } from '../entities/post.entity';

export async function addComment(postId: number, content: string) {
  const comment : Comment = new Comment();
  Post.id = postId;
  comment.content = content;
  await comment.save();
  return comment;
}