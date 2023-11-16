import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { ReactionsService } from '../services/reactions.service';
import { Reactions } from '../reactions';
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
  likes: number = 0;
  dislikes: number = 0;

  showValues = false;

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
    // array empty or does not exist
    if (reactions === undefined || reactions.length == 0) {
      console.log("undefined")
      this.showValues = true;

      return undefined;
    } else {
      return reactions;
    }
  }

  

  addLike(id: number, likes: number, dislikes: number): void {
    console.log("adding like")
    this.showValues = false;
    this.reactionsService.addLike(id, likes, dislikes);
  } 
  addDislike(id: number, likes: number, dislikes: number): void {
    console.log("adding dislike")
    this.showValues = false;
    this.reactionsService.addDislike(id, likes, dislikes);
  }  
}