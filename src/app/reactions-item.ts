import { Post } from './post';

export class ReactionsItem {
  public post: Post;
  public likes: number = 1;
  public id: number = -1;

  constructor(post: Post) {
    this.post = post;
  }
}