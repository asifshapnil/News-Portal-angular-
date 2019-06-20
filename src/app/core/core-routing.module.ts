import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BeforeLoginService } from './services/before-login.service';

const authroutes: Routes = [
    { path: 'auth',
    component: AuthComponent,
    },
    { path: 'login',
    component: LoginComponent
    },
    { path: 'register',
    component: RegisterComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(authroutes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
