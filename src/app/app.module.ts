import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PostItemComponent } from './post-item/post-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { PostReactionsComponent } from './post-reactions/post-reactions.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostItemComponent,
    NewPostComponent,
    NavbarComponent, 
    PostDetailsComponent,
    CommentItemComponent,
    PostReactionsComponent,
    AdminComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
