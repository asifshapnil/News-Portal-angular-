import { GuestUserHomeComponent } from './guest-user/guest-user-home/guest-user-home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
// import { PostComponent } from './guest-user/post-details/post.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'newsportal'
    },
    {
      path: 'newsportal',
      component: GuestUserHomeComponent
    },
    {
      path: 'post',
      loadChildren: '../app/post/post.module#PostModule'
    },
    {
      path: 'admin',
      component: AdminComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
