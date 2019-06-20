import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../../services/http.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public error = null;

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private http_s: HttpService, private token: TokenService, private router: Router, private auth: AuthService)
   {
    this.loginForm = formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
    }

  ngOnInit() {
  }

  onSubmit() {
    this.http_s.loginUser(this.loginForm.value).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
  }
  handleResponse(data) {

    this.token.handle(data.data.access_token.original.access_token);
    localStorage.setItem('role', data.data.roles[0].role);
    localStorage.setItem('name', data.data.name);
    localStorage.setItem('email', data.data.email);

    this.auth.changeAuthStatus(true);
    if(data.data.roles[0].role === 'admin') {
      this.router.navigateByUrl('/admin');
    } else {
      this.router.navigateByUrl('/contributor');
    }
    console.log(this.http_s.getInfo());
    this.http_s.setHeader();

  }

}
