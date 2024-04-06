import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private _HttpClient: HttpClient ,private Router:Router) {}


// to set and get the user check

 Logout(){
  localStorage.removeItem("Token");
  this.Router.navigate(["/Login"]);
 }

  UserData:any;

  user(){
    if (localStorage.getItem("Token") != null) {
      let EncodedToken:any = localStorage.getItem("Token");
      let decodedtoken = jwtDecode(EncodedToken)
      this.UserData = decodedtoken
      console.log(this.UserData)
    }
  }
  Login(userData:object):Observable<any>
  {
    return this._HttpClient.post('http://localhost:5004/api/Login', userData);
  }
}






