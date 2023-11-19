import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { ReactionsService } from '../services/reactions.service';
import { Reactions } from '../services/reactions';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-reactions',
  templateUrl: './post-reactions.component.html',
  styleUrls: ['./post-reactions.component.css'],
})
export class PostReactionsComponent  {
  @Input() post: Post = {} as Post;

  id: number = -1;
  likes: number = 1;
  dislikes: number = 1;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(
    private reactionsService: ReactionsService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,

  ) {
    activatedRoute.params.subscribe(
      (params) => (this.id = parseInt(params['id'])),
    );
  }
  
  get reactions(): Reactions[] | undefined {

    let reactions = this.reactionsService.reactions.filter(
      (all) => all.id === this.id,
    );
    return reactions;
  }

  addLike(id: number, likes: number): void {
    console.log("adding like")
    this.reactionsService.addLike(id, likes);
  } 
  
  addDislike(id: number, dislikes: number): void {
    console.log("adding dislike")
    this.reactionsService.addDislike(id, dislikes);
  }  
}