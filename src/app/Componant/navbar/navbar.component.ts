import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/Login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 
  constructor(private _LoginServices:LoginService) {}

  userData: any;
  //  Isuser:any = this._LoginServices.IsUser


  ngOnInit(): void {
    this._LoginServices.user(); // Call the method to fetch user data
    this.userData = this._LoginServices.UserData; // Assign user data to the userData variable
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen)
  }

// to log out
  logout(){
    this._LoginServices.Logout()
  }

  isMenuOpen:boolean = false;

  isUser:boolean = localStorage.getItem("Token") != null ? true : false;

  ClientUser:boolean = true

  HostUser:boolean = true


}
