import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private _HttpClient:HttpClient) { }

  getAllPlaces():Observable<any>{
  return  this._HttpClient.get("http://localhost:5004/api/Place/filter")
  }

  getPlacesWithCategory(category:string):Observable<any>{
    return  this._HttpClient.get(`http://localhost:5004/Api/Place/category?$filter=categoryname%20eq%20%27${category}%27&$orderby=id%20Desc`)
    }

    getPlaceDetails(id:number):Observable<any>{
      return  this._HttpClient.get(`http://localhost:5004/api/Place/Get Place By Id With User/${id}`)
      }
  

      getPlacewishlist(id:string):Observable<any>{
        return  this._HttpClient.get(`http://localhost:5004/api/Wishlist/${id}`)
        }

    
          AddPlacewishlist(PlaceData:object):Observable<any>
          {
            return this._HttpClient.post('http://localhost:5004/api/Wishlist', PlaceData);
          }
  
          removePlacewishlist(UserId:string , PlaceId:number):Observable<any>
          {
            return this._HttpClient.delete(`http://localhost:5004/api/Wishlist/${UserId}/wishlist/${PlaceId}`);
          }


          AddReview(PlaceId:number , UserId:string , review:object):Observable<any>
          {
            return this._HttpClient.post(`http://localhost:5004/api/Place/${PlaceId}/Reviews and OverallRating/${UserId}` , review);
          }

         
          getProfile(UserId:string ):Observable<any>
          { 
            return this._HttpClient.get(`http://localhost:5004/api/User/${UserId}`);
          }
         

          SearchPlaces(Nameorlocation:string ):Observable<any>
          {
            return this._HttpClient.get(`http://localhost:5004/Api/Place/search?$filter=contains(location, '${Nameorlocation}') or contains(name, '${Nameorlocation}')&$orderby=id Desc`);
          }


          


          FilterPlaces(location:string ,capacity:number  , categoryName:string , price:number , rating:number ):Observable<any>
          {
            let categoryCheck = "eq"
            let locationCheck = "eq"
            if (categoryName == '')
              categoryCheck = "ne"
            if (location == '')
                locationCheck = "ne"
            return this._HttpClient.get(`http://localhost:5004/Api/Place/filter?$filter=CategoryName%20${categoryCheck}%20%27${categoryName}%27%20and%20price%20le%20${price}%20and%20rating%20ge%20${rating}%20and%20PeopleCapacity%20ge%20${capacity}%20and%20location%20${locationCheck}%20%27${location}%27&$orderby=id%20desc`);
          }


          userProfile(id:string):Observable<any>{
            return  this._HttpClient.get(`http://localhost:5004/api/User/${id}`);
            }

}
