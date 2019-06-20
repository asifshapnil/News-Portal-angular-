import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
import {TokenService} from './token.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    public headers;

    constructor(private http: HttpClient, private auth: AuthService, private token: TokenService) {
    }

    setHeader() {
      return   this.headers = new HttpHeaders().set('x-token-key', `${this.token.get()}`);
    }



    usersUrl = 'http://127.0.0.1:8000/api/auth';

    postUser(body: any): Observable<any> {
        console.log(body);
        return this.http.post<any>(`${this.usersUrl}/auth/register`, body);
    }

    loginUser(body: any): Observable<any> {
        console.log(body);
        return this.http.post<any>(`${this.usersUrl}/login`, body);
    }

    getInfo(): Observable<any> {
        const headers = this.headers;
        return this.http.get<any>(`${this.usersUrl}/auth/me`, {headers});
    }
}
