import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { PostItemComponent } from './components/post-item/post-item.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { PostReactionsComponent } from './post-reactions/post-reactions.component';
import { AdminComponent } from './views/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './views/landing/landing.component';
import { NgParticlesModule } from "ng-particles";

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
    AboutComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    FontAwesomeModule, 
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
