import { GuestUserHomeComponent } from './guest-user/guest-user-home/guest-user-home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
      path: 'newsportal',
      component: GuestUserHomeComponent
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
