import { Component, Input } from '@angular/core';
import { PlacesService } from '../../Services/Places/places.service';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/Login/login.service';
import { ToastService } from '../../Services/toastServices/toast.service';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrls: ['./place-card.component.css']
})
export class PlaceCardComponent {
  @Input() PlaceData: any;

  isfav: boolean = false;

  constructor(private _ToastServises: ToastService ,private _LoginServices: LoginService, private _PlacesService: PlacesService, private _Router: Router) { }


  Notaccess(){
    if (localStorage.getItem("Token") == null) {
      this._Router.navigate(["/Login"])
    }

  }

  toggleMenu(userId: string, placeId: number) {
      // Add the place ID to the array in local storage
        let WPlaceData = { userId: userId, placeId: placeId };
        this.addtowishlist(WPlaceData);
  }
  
  
  pagination:number = 20

  ViewMore(){
    this.pagination = this.pagination + 20;
  }


  CarImg: string[] = [
    "../../../assets/Imgs/Hero3.jpg",
    "../../../assets/Imgs/Hero2.jpg",
    "../../../assets/Imgs/hero1.jpg",
    "../../../assets/Imgs/hero4.jpg",
  ]

  userData: any;

  ngOnInit(): void {
    this._LoginServices.user();
    this.userData = this._LoginServices.UserData;
  }


  addtowishlist(WPlaceData: any) {
    this._PlacesService.AddPlacewishlist(WPlaceData).subscribe({
      next: (Response) => {
        console.log(Response)
        this._ToastServises.showToast(Response.message)
      }
    })
  }
}