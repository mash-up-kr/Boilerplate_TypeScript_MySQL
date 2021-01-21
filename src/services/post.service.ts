// entity를 import하여 비즈니스 로직을 구성(service)
import {Post} from '../entities/post.entity';

export async function getPosts() {
  const posts: Post[] = await Post.find();
  return posts;
}

export async function addPost(title: string, content: string) {
  const post: Post = new Post();
  post.title = title;
  post.content = content;
  await post.save();
  return post;
}
