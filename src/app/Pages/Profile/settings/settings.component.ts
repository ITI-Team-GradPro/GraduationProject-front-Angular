import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../../Services/Login/login.service';
import { UserService } from '../../../Services/userSetting/user.service';
import { response } from 'express';

interface UserData {
  firstName: string;
  lastName: string;
  gender: number;
  dateOfBirth: Date;
  phone: string;
  bio: string;
  address: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  userData: any;
  userId!: string;
 database !:UserData ; 


  constructor(private http: HttpClient, private _LoginServices: LoginService, private userService: UserService) {
    this.database = {} as UserData;

  }

  ngOnInit() {
    this._LoginServices.user();
    this.userData = this._LoginServices.UserData;
    console.log(this.userId);
      this.userService.getUserData(this.userId).subscribe({
        next : (response) =>{
          console.log(this.database);
          this.database= response;
          console.log('The user data is ', response);

          
        },
        error: (error) => {
                  console.error('Error:', error);
                  alert('Failed to change password: ' + error.message);
      }
    })
  
  }}

// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { LoginService } from '../../../Services/Login/login.service';
// import { UserService } from '../../../Services/userSetting/user.service';
// import { response } from 'express';
// import { AuthService } from '../../../Services/Auth/auth.service';
// import { ChangePasswordService } from '../../../Services/ChangePassword/change-password.service';

// interface UserData {
//   firstName: string;
//   lastName: string;
//   gender: number;
//   dateOfBirth: Date;
//   phone: string;
//   bio: string;
//   address: string;
// }

// @Component({
//   selector: 'app-settings',
//   templateUrl: './settings.component.html',
//   styleUrls: ['./settings.component.css']
// })
// export class SettingsComponent {

// userData: any;
//   passwordData:object= {};
//     constructor(private authService: AuthService, private _LoginServices : LoginService ,private passwordService: ChangePasswordService) { 

//     }
//     ngOnInit(): void {
//       this._LoginServices.user();
//       this.userData = this._LoginServices.UserData;
//     }


//     changeUserData(userId: string) {
//       let firstName =(document.getElementById('fname') as HTMLInputElement).value;
//       let lastName =(document.getElementById('lname') as HTMLInputElement).value;
//       let address =(document.getElementById('Address') as HTMLInputElement).value;
//       let phone =(document.getElementById('phone') as HTMLInputElement).value;

//      this.passwordData= {
//       firstName :firstName,
//       lastName:lastName,
//       address:address,
//       phone:phone,
//       userId :userId
//     };
//     console.log("this is the data that will be sent to server",this.passwordData);
//     this.passwordService.changeUserData(this.userData)
//     .subscribe({
//       next: (response) => {
//         console.log(response);
//           alert('Password changed successfully');
//       },
//       error: (error) => {
//         console.error('Error:', error);
//         alert('Failed to change password: ' + error.message);
//       }
//     });
//   }}