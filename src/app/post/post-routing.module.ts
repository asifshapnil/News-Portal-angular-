import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostComponent } from './post/post.component';

const postRoutes: Routes = [
  {
  path: '', component: PostDetailsComponent,
  children: [
      {path: ':id', component: PostComponent},
      // {path: 'branch', component: BranchComponent},
  ]
}
];


@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }
