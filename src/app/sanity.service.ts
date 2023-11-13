import { Injectable } from '@angular/core';
import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

@Injectable({
  providedIn: 'root'
})
  
export class SanityService {
  constructor() { }

  sanityClientCredentials = {
    option: createClient({
      projectId: "ix3iywkw",
      dataset: "production", 
      apiVersion: '2021-08-31',
      useCdn: false 
    })
  }

  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);
}