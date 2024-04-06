import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/Auth/auth.service';
import { Router} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})


export class SignUpComponent implements OnInit{

  Errormsg:string = '';

  error:string = '';
  isLoading:boolean = false;

  constructor(private _AuthService:AuthService, private _Router:Router) { }
  ngOnInit(): void {
  }
  
  
  registerForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.minLength(4), Validators.required]),
    lastName: new FormControl(null, [Validators.minLength(4), Validators.required]),
    RoleName: new FormControl(null,[Validators.required]),
    Role: new FormControl(1),
  });

  RegisterForm(registerForm: FormGroup)
  {
    console.log(registerForm.value);
    this.isLoading = true;
    this._AuthService.clientSignUp(registerForm.value).subscribe({
      next:(Response)=>{
        this.isLoading = false;
        console.log(Response)
        if(Response.message === "User created successfully!.")
        {
            this._Router.navigate(["/Login"])
        }
        else
        {
          this.error = Response.message
        }
      }
    })
  }

  Hostregisteration(registerForm: FormGroup)
  {
    console.log(registerForm.value);
    this.isLoading = true;
    this._AuthService.HostSignUp(registerForm.value).subscribe({
      next:(Response)=>{
        this.isLoading = false;
        console.log(Response)
        if(Response.message === "User created successfully!")
        {
            this._Router.navigate(["/Login"])
        }
      } ,
      error : (err : HttpErrorResponse) => {
        this.isLoading = false;
        console.log(err.error.message)
        this.Errormsg = err.error.message
      }
    })
  }

}