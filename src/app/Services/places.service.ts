import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private _HttpClient:HttpClient) { }
  
  AddPlace(userData:object):Observable<any>
  {
      return this._HttpClient.post('http://localhost:5004/api/Place/AddPlaceWithImages', userData);
  }
}
