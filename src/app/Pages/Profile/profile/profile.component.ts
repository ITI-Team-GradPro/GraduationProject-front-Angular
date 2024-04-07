import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Services/Login/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../../Services/Places/places.service';
import { UserProfile } from '../../../Interfaces/place';
import { response } from 'express';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  constructor(private _LoginServices:LoginService , private _ActivatedRoute: ActivatedRoute, private _PlacesService: PlacesService) { }
  userData: any;
  Token:boolean = false
  ProfileData:UserProfile = {} as UserProfile
 
  ngOnInit(): void {
   
        this._LoginServices.user();
        this.userData = this._LoginServices.UserData; 
    
        this._PlacesService.userProfile(this.userData.Id).subscribe({
          next : (response) => {
            this.ProfileData = response;
            console.log(this.ProfileData);
          },

          
          error: (error) => {
            console.error('Error:', error);
            alert('Failed to change password: ' + error.message);
          }});
        }
      };
        





