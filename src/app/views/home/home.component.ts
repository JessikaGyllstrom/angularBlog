import { Component, OnInit } from '@angular/core';
import { Post } from '../../utils/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    // private sanityService: SanityService,
     private postService: PostService,
  ) { }
  
  get posts(): Post[] {
    console.log(this.postService.posts)
    return this.postService.posts;
  }
}