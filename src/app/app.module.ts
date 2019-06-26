import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import { GuestUserHomeComponent } from './guest-user/guest-user-home/guest-user-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {UiComponents} from './ui-components';
import { PostComponent } from './guest-user/post-details/post.component';
import { TopNewsComponent } from './guest-user/top-news/top-news.component';
import { PopularPostsComponent } from './guest-user/popular-posts/popular-posts.component';
import { BreakingNewsComponent } from './guest-user/breaking-news/breaking-news.component';
import { PostMediaComponent } from './guest-user/post-media/post-media.component';

@NgModule({
    declarations: [
        AppComponent,
        GuestUserHomeComponent,
        NavbarComponent,
        AdminComponent,
        PostComponent,
        TopNewsComponent,
        PopularPostsComponent,
        BreakingNewsComponent,
        PostMediaComponent,
    ],
    imports: [
        AppRoutingModule,
        CoreModule,
        BrowserAnimationsModule,
        UiComponents,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
