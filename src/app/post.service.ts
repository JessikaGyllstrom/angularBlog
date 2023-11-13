import { Injectable } from '@angular/core';
import  { createClient } from '@sanity/client';
import { Post } from './post';
import { ReactionsItem } from './reactions-item';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  private apiPosts: Post[] = [];
  private localPosts: Post[] = [];
  // private reactionService: Post[] = [];

   private reactionService: string[] = [];

  sanityClientCredentials = {
    option: createClient({
      projectId: "ix3iywkw",
      dataset: "production", 
      apiVersion: '2021-08-31',
    })
  }
  constructor() {
    this.loadApiData().then((posts) => (this.apiPosts = posts));
    this.localPosts = this.loadLocalData();
    this.reactionService = this.reactionService
  }
  private async loadApiData() {
    let result = await this.sanityClientCredentials.option.fetch(
      `*[_type == "post"] {
        id,
        title,
        body,
        tags,
        creationDate, 
        thumbnailUrl,
      }`
    )
    return result;
  }

  public loadLocalData(): Post[] {
    //localStorage.clear();

    let posts = localStorage.getItem('posts');
    return !posts ? [] : JSON.parse(posts);
  }

  public get posts(): Post[] {
    return this.apiPosts.concat(this.localPosts);
  }

  public addPost(title: string, body: string) {
    this.localPosts.push({
      id: this.apiPosts.length + this.localPosts.length + 1,
      title,
      body,
      creationDate: new Date(),
      thumbnailUrl: 'image-b1e87101fb8847bc92dd11b7b4d42f844a300107-849x741-jpg'
    });

    localStorage.setItem('posts', JSON.stringify(this.localPosts));
  }
  public getAllposts(): Post[] {
    console.log("all posts" + this.apiPosts.concat(this.localPosts) )
    return this.apiPosts.concat(this.localPosts);
  }

  public saveReactions(items: ReactionsItem[]): void {
    localStorage.setItem('posts', JSON.stringify(items));
  }

  public loadReactions() {
    let reactionsJson = localStorage.getItem('posts');
    return !reactionsJson ? [] : JSON.parse(reactionsJson);
  }

}
