import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { Profile } from '../utils/profile';

@Injectable({
  providedIn: 'root'
})
  
export class SanityService {
  
  private apiProfile: Profile[] = [];

    sanityClientCredentials = {
    option: createClient({
      projectId: "ix3iywkw",
      dataset: "production", 
      apiVersion: '2021-08-31',
    })
  }
  constructor() { 
    this.loadApiData().then((profile) => (this.apiProfile = profile));
  }
  private async loadApiData() {
    let result = await this.sanityClientCredentials.option.fetch(
      `*[_type == "profile"] {
        id,
        greeting,
        name,
        bio,
        avatarUrl,
      }`
    )
    return result;
  }
  public get profile(): Profile[] {
    return this.apiProfile;
  }
  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);
}