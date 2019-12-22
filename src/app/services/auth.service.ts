import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
readonly API_URL = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  signin(user){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/login', user, {headers: headers} );
  }
}
