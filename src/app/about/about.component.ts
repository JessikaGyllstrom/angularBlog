import { Component } from '@angular/core';
import { Profile } from '../profile';
import { SanityService } from '../services/sanity.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(
    private sanityService: SanityService,
  ) { }
    imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  get profile(): Profile[] {
    console.log(this.sanityService.profile)
    return this.sanityService.profile;
  }
}
