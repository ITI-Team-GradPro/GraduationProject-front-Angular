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
    "https://images.unsplash.com/photo-1712313498056-1feb70bd6999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706460014927-b8be7c474c9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1689177356639-ba90d04a5285?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1689177356639-ba90d04a5285?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
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