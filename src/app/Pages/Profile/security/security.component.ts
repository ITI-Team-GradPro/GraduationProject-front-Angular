import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChangePasswordService } from '../../../Services/ChangePassword/change-password.service';
import { AuthService } from '../../../Services/Auth/auth.service';
import { LoginService } from '../../../Services/Login/login.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {
  userData: any;
  passwordData:object= {};
    constructor(private authService: AuthService, private passwordService: ChangePasswordService , private _LoginServices : LoginService) { 

    }
    ngOnInit(): void {
      this._LoginServices.user();
      this.userData = this._LoginServices.UserData;
    }

    
    changePassword(userId: string) {
      let oldPassword =(document.getElementById('oldPassword') as HTMLInputElement).value;
      let newPassword =(document.getElementById('newPassword') as HTMLInputElement).value;
     this.passwordData= {
      oldPassword : oldPassword ,
      newPassword : newPassword,
      userId :userId
    };

    console.log(this.passwordData);
      this.passwordService.changePassword(this.passwordData)
        .subscribe({
          next: (response) => {
            console.log(response);
              alert('Password changed successfully');
          },
          error: (error) => {
            console.error('Error:', error);
            alert('Failed to change password: ' + error.message);
          }
        });
    }
  }
  


