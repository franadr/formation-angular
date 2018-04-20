import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Token} from '../models/token';

@Injectable()
export class AuthenticationService {
  token: string;
  constructor(private _http: HttpClient) { }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  login(username, password): EventEmitter<boolean> {
    const res: EventEmitter<boolean> = new EventEmitter<boolean>();
    this._http.post(`${environment.backendUrl}/authenticate`, { username: username, password: password})
      .subscribe((response: Token) => {
          if(response.token) {
            this.token= response.token;
            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: this.token }));
            res.emit(true);
          } else {
            res.emit(false);
          }
      }, (error) => {
        res.emit(false);
      });
    return res;
  }
}
