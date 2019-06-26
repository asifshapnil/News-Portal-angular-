import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AuthComponent, LoginComponent, RegisterComponent ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    exports: [LoginComponent],
})
export class CoreModule {

    ngOninit() {
        console.log('core-loading');
    }
}
