import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../Services/Places/places.service';
import { Place } from '../../Interfaces/place';
import { LoginService } from '../../Services/Login/login.service';
import { ToastService } from '../../Services/toastServices/toast.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  constructor(private _ToastServises : ToastService , private _LoginServices: LoginService, private _ActivatedRoute: ActivatedRoute, private _PlacesService: PlacesService) { }

  WishlistPlaces:Place[] = [];

  userData: any;


  ngOnInit(): void {

    this._LoginServices.user();
    this.userData = this._LoginServices.UserData;

    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let IdParam: any = params.get("id");
        this._PlacesService.getPlacewishlist(IdParam).subscribe({
          next: (response) => {
            this.WishlistPlaces = response;
            console.log(this.WishlistPlaces);

          }
        });
        console.log(params);

      } 
    });
  }


  CarImg:string[] = [
    "../../../assets/Imgs/Hero3.jpg" , 
    "../../../assets/Imgs/Hero2.jpg" , 
    "../../../assets/Imgs/hero1.jpg" , 
    "../../../assets/Imgs/hero4.jpg" , 
   ]
 
 
   Notaccess(){
     // if (localStorage.getItem("Token") == null) {
     //   this._Router.nav(["/Login"])
     // }
 
   }

  
   toggleMenu(userId: string, placeId: number) {
    this.removePlacewishlist(userId , placeId)
  
   }
   
   
   pagination:number = 20
 
   ViewMore(){
     this.pagination = this.pagination + 20;
   }



  //  to rerender the page
   loadWishlistPlaces(userId: string): void {
    this._PlacesService.getPlacewishlist(userId).subscribe({
      next: (response) => {
        this.WishlistPlaces = response;
        console.log(this.WishlistPlaces);
      }
    });
  }
 
   removePlacewishlist(UserId:string , PlaceId :number) {
     this._PlacesService.removePlacewishlist(UserId , PlaceId).subscribe({
       next: (Response) => {
         console.log(Response)
         this._ToastServises.showToast(Response.message)
         this.loadWishlistPlaces(UserId);
       }
     })
   }
 

}
