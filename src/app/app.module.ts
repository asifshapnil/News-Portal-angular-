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

@NgModule({
    declarations: [
        AppComponent,
        GuestUserHomeComponent,
        NavbarComponent,
        AdminComponent,
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
