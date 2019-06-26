import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post/post.component';
import { PopularThisWeekComponent } from './popular-this-week/popular-this-week.component';

@NgModule({
  declarations: [PostDetailsComponent, PostComponent, PopularThisWeekComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { 
  constructor() {
  }
}


 