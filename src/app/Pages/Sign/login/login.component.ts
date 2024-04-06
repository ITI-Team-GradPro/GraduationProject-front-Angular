import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/Auth/auth.service';
import { LoginService } from '../../../Services/Login/login.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  isLoading:boolean = false;

  Errormsg:string = '';

  constructor(private _LoginServices:LoginService , private Router :Router) {}

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [Validators.required]),
  });




  SubmitLoginForm()
  {
    console.log(this.loginForm.value);
    this.isLoading = true;
    if (this.loginForm.valid) {
      this._LoginServices.Login(this.loginForm.value).subscribe( {
        next : (Response)=>{
          this.isLoading = false;
          console.log(Response)

          localStorage.setItem("Token" , Response.token)
          
          this._LoginServices.user();
          
            if (Response.userData.roleName == "Client" || Response.userData.roleName == "Host" ) {
              this.Router.navigate(["/Home"])
            }
        },
        error : (err : HttpErrorResponse) => {
          this.isLoading = false;
          console.log(err.error.message)
          this.Errormsg = err.error.message
        }
  
  
      })
    }



  }
  ngOnInit(): void{}


}