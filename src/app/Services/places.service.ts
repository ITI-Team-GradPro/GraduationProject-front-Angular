import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor(private _HttpClient: HttpClient) {}

  AddPlace(IdData: object): Observable<any> {
    return this._HttpClient.post(
      'http://localhost:5004/api/Place/AddPlaceWithImages',
      IdData
    );
  }

  // GetDataByPlaceId(placeData:any):Observable<any>{
  //   return this._HttpClient.get("http://localhost:5004/api/Place/GetPlaceById?="${placeData.Id}"");//parameter should be place id
  // }

  GetPlaceDataById(placeid: any): Observable<any> {
    return this._HttpClient.get<any>(
      'http://localhost:5004/api/Place/Get Place By Id With User/',placeid
    );
  }

  updatePlaceDataNoPic(userData:Object): Observable<any> {
    return this._HttpClient.put<any>(
      'http://localhost:5004/api/Place/Update Place without Photo',userData
    );
  }

  updatePlaceImage(): Observable<any> {
    return this._HttpClient.put<any>(
      'http://localhost:5004/api/Place/UpdatePlaceImage',
      'Updated Successfully'
    );
  }
}
