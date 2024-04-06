import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  // private apiUrl = 'https://localhost:44329/api/ForgotPassword/ChangePassword'; 

  // constructor(private http: HttpClient) { }

  // changePassword(userId: string, oldPassword: string, newPassword: string): Observable<any> {
  //   const requestBody = { userId, oldPassword, newPassword };
  //   return this.http.post<any>(this.apiUrl, requestBody);
  // }


   constructor(private _HttpClient: HttpClient) { }

  changePassword(PasswordData:object):Observable<any>
          {
            return this._HttpClient.put('http://localhost:5004/api/ForgotPassword/ChangePassword', PasswordData);
          }
}


