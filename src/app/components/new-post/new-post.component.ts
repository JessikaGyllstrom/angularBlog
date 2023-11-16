import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  constructor(
    private postService: PostService,
    private router: Router,
  ) {}

  addPost(title: string, content: string): void {
    // if either inputfields is empty
    if (!title || !content) {
      alert("Field cant be empty!")
    }
    // if inputfields cointains values 
    else {
      alert("Post Added!")
      this.postService.addPost(title, content);
      this.router.navigate(['/']);
    }
  }
}
