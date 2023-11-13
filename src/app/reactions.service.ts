import { Injectable } from '@angular/core';
import { ReactionsItem } from './reactions-item';
import { Post } from './post';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class ReactionsService {
  private _items: ReactionsItem[];


  constructor(private storageService: PostService) {
    this._items = storageService.loadReactions();
  }


  public get items(): ReactionsItem[] {
    console.log("getting items" + this._items)
    return this._items;
  }

  public addItem(product: Post): void {
    this._items.push(new ReactionsItem(product));
    this.storageService.saveReactions(this._items);
  }

  public addAmount(productId: number): void {
    console.log(productId)
    for (let item of this._items) {
      if (item.id === productId) {
        item.likes++;
      }
    }

    this.storageService.saveReactions(this._items);
  }
}