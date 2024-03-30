import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }

  clientSignUp(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://localhost:44340/api/Register/Client', userData);
  }
  HostSignUp(userData:object):Observable<any>
  {
    return this._HttpClient.post('https://localhost:44340/api/Register/Host', userData);
  }
}
