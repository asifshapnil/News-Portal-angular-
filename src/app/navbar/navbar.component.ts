import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { TokenService } from '../core/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  private loggedIn: boolean;
  userName;
    constructor(private auth: AuthService, private token: TokenService, private router: Router) {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.auth.authStatus.subscribe(value => this.loggedIn = value);
        this.userName = localStorage.getItem('name');
    }




}
