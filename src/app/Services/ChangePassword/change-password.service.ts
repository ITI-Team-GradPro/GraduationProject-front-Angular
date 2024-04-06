import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

 

   constructor(private _HttpClient: HttpClient) { }

  changePassword(PasswordData:object):Observable<any>
          {
            return this._HttpClient.put('http://localhost:5004/api/ForgotPassword/ChangePassword', PasswordData);
          }


changeUserData(userId:string):Observable<any>
{
  return this._HttpClient.put(`http://localhost:5004/api/User/${userId}`,null);
         
 }
}


