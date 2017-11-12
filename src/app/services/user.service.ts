import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  apiUrl = environment.url;

  constructor(private http: Http) { }

  registerUser(user){
    return this.http.post(this.apiUrl + 'user', user, {withCredentials: true}).map(res =>  res.json());
  }

  loginUser(user){
    return this.http.post(this.apiUrl + 'user/auth', user, {withCredentials: true}).map(res =>  res.json());
  }

}
