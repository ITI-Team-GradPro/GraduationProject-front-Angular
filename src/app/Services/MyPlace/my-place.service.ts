import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyPlaceService {

  constructor(private _HttpClient:HttpClient) { }

  getallcategory():Observable<any>
  { 
    return this._HttpClient.get(`http://localhost:5004/api/Category`);
  }



}

