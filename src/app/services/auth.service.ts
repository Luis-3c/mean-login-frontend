import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
readonly API_URL = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  signin(user: User){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/login', user, {headers: headers} );
  }

  signup(user: User){
    const headers = new HttpHeaders({'Content-Type': 'Application/json'});
    return this.http.post(this.API_URL + '/register', user, {headers: headers});
  }

  profile(){
    return this.http.get(this.API_URL + '/profile');
  }
}
