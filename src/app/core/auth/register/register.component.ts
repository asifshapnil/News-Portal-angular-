import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    public error = [];
    public successmessage = '';

    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private http: HttpClient, private https: HttpService, private router: Router) {
        this.signUpForm = formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            password_confirmation: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.signUpForm.value);
        this.https.postUser(this.signUpForm.value).subscribe(
            res => this.handleResponse(res),
            error => this.handleError(error)
        );
    }

    handleError(error) {
        this.error = error.error.errors;
    }

    handleResponse(res) {
        this.error = [''];
        this.successmessage = res;
        this.router.navigateByUrl('/login');

    }
}
