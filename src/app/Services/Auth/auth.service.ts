import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private apiUrl = 'https://localhost:44329/api/GetUserWithRole/'; 

  constructor(private _HttpClient: HttpClient) { }

  clientSignUp(userData:object):Observable<any>
  {
    
      return this._HttpClient.post('http://localhost:5004/api/Register/Client', userData);
  }
  HostSignUp(userData:object):Observable<any>
  {
    return this._HttpClient.post('http://localhost:5004/api/Register/Host', userData);


  }

  getUserInfo(UserRoleName: string): Observable<any> {
    const url = `${this.apiUrl}${UserRoleName}`; 
    return this._HttpClient.get<any>(url);
  }
}
