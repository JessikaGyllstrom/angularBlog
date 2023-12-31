import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../utils/post';
import { PostService } from '../../services/post.service';
import { SanityService } from '../../services/sanity.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() post: Post = {} as Post;

    constructor(
    private sanityService: SanityService,
     private postService: PostService,
    ) { }
  
  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }
}
