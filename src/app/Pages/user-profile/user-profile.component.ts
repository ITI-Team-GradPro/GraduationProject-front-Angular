import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/Login/login.service';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../Services/Places/places.service';
import { OwnerProfile } from '../../Interfaces/place';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  constructor(private _LoginServices:LoginService , private _ActivatedRoute: ActivatedRoute, private _PlacesService: PlacesService) { }
  userData: any;
  Token:boolean = false
  ProfileData:OwnerProfile = {} as OwnerProfile

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let IdParam: any = params.get("id");
        this._PlacesService.getProfile(IdParam).subscribe({
          next: (response) => {
            this.ProfileData = response
            console.log(this.ProfileData);

          }
        });

        if (localStorage.getItem("Token") != null) {
          this.Token = true
        } else {
          this.Token = false
        }

        this._LoginServices.user();
        this.userData = this._LoginServices.UserData; 
    

        console.log(params);
      } 
    });
  }


}
