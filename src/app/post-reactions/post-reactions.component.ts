import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ReactionsItem } from '../reactions-item';
import { ReactionsService } from '../reactions.service';

@Component({
  selector: 'app-post-reactions',
  templateUrl: './post-reactions.component.html',
  styleUrls: ['./post-reactions.component.css'],
})
export class PostReactionsComponent  {
  @Input() post: Post = {} as Post;

  id: number = -1;
  

  constructor(
    private reactionsService: ReactionsService,
        private postService: PostService,

      private activatedRoute: ActivatedRoute,

  ) {
    activatedRoute.params.subscribe(
      (params) => (this.id = parseInt(params['id'])),
    );
  }
  // get post(): Post | undefined {
  //   return this.postService.posts.find((all) => all.id === this.id);
  // }

  get items() {
    let post = this.post;
    if (!post) return undefined;

    let items = this.reactionsService.items.filter(
      (all) => all.id === post?.id,
    );

    return items;
  }
  addAmount(item: ReactionsItem): void {
    console.log("adding amount" + item.id)
    this.reactionsService.addAmount(this.id);
  }


}