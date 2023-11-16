// Huvudsidan skall minst innehålla:

// Alla blogginlägg
// Man skall kunna trycka på ett inlägg och komma in på en ny sida 
// som visar blogginlägget i detalj
// Ett blogginlägg på denna ska visa en titel och en bild (thumbnailUrl) men inget innehåll (body)

import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { PostService } from '../../services/post.service';
import { SanityService } from '../../services/sanity.service';

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