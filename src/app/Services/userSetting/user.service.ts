
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  userId : any

  getUserData(userId : string): Observable<any> {
    return this.http.get(`http://localhost:5004/api/User/${userId}`);
  }

}
