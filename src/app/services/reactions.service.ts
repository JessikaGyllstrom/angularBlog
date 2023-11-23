import { Injectable } from '@angular/core';
import { Reactions } from './reactions';

@Injectable({
  providedIn: 'root',
})
export class ReactionsService {

  private localReactions: Reactions[];

  constructor() {
    this.localReactions = this.loadLocalData();
  }

  private loadLocalData(): Reactions[] {
    console.log("loading local reactions")
    let reactions = localStorage.getItem('reactions');
    console.log(reactions)
    return !reactions ? [] : JSON.parse(reactions);
  }

  public get reactions(): Reactions[] {
    return this.localReactions;
  }

  public addNewReaction(id: number, likes: number, dislikes: number) {

    this.localReactions.push({
      id: id,
      likes: likes,
      dislikes: dislikes,
      });
    localStorage.setItem('reactions', JSON.stringify(this.localReactions));
  } 

  public addLike(id: number, likes: number) {

    let itemExist = this.reactions.some(e => e.id === id);

    if (itemExist) {
      for (let item of this.localReactions) {
        if (item.id === id) {
          item.likes++;
        }
      }
    }
    else {
      this.localReactions.push({
        id: id,
        likes: likes,
        dislikes: 0,
      });
    }
  }

  public addDislike(id: number, dislikes: number) {
    // localStorage.clear();
    let itemExist = this.reactions.some(e => e.id === id);

    if (itemExist) {
      for (let item of this.localReactions) {
        if (item.id === id) {
          item.dislikes++;
        }
      }
    }
    else {
      this.localReactions.push({
        id: id,
        likes: 0,
        dislikes: dislikes,
      });
    }
    localStorage.setItem('reactions', JSON.stringify(this.localReactions));
  }
}