import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestUserServiceService {
  url = 'http://127.0.0.1:8000/api/';

  constructor(protected http: HttpClient) { }

  getLatestPostForCover(): Observable<any> {
     return this.http.get<any>(`${this.url}get-cover-post`);
  }


}
