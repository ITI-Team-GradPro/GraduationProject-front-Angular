import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _HttpClient: HttpClient) { }

  UserData:any;

  user(){
    if (localStorage.getItem("Token") != null) {
      let EncodedToken:any = localStorage.getItem("Token");
      let decodedtoken = jwtDecode(EncodedToken)
      this.UserData = decodedtoken
      console.log(decodedtoken)
    }
  }
  Login(userData:object):Observable<any>
  {
    return this._HttpClient.post('http://localhost:5004/api/Login', userData);
  }
}






