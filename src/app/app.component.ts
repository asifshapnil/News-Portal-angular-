import {Component} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from './core/services/token.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'hris-client';

    private loggedIn: boolean;

    constructor(private auth: AuthService, private token: TokenService, private router: Router) {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.auth.authStatus.subscribe(value => this.loggedIn = value);
    }

    logout(event: MouseEvent) {
        event.preventDefault();
        this.token.remove();
        this.auth.changeAuthStatus(false);
        this.router.navigateByUrl('/login');
    }
}
