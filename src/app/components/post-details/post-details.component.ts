import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { Post } from '../../post';
import { PostService } from '../../services/post.service';
import { Comment } from '@angular/compiler';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent  {

  id: number = -1;
  num: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
  ) {
    activatedRoute.params.subscribe(
      (params) => (this.id = parseInt(params['id'])),
    );
  }
  get post(): Post | undefined {
    return this.postService.posts.find((all) => all.id === this.id);
  }

  get comments() {
    let post = this.post;
    if (!post) return undefined;

    let comments = this.commentService.comments.filter(
      (all) => all.postId === post?.id,
    );

    return comments;
  }


  sendComment(body: string): void {
    let post = this.post;

    if (!post) return;
    console.log("adding comment")

    this.commentService.addComment(body, post);
  }  
  
  

}