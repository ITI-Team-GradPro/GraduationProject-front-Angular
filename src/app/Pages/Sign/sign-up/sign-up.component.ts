import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/Auth/auth.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})


export class SignUpComponent implements OnInit{

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  error:string = '';
  isLoading:boolean = false;
  
  registerForm:FormGroup = new FormGroup({
    Email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [Validators.required]),
    FirstName: new FormControl(null, [Validators.minLength(4), Validators.required]),
    LastName: new FormControl(null, [Validators.minLength(4), Validators.required]),
    RoleName: new FormControl(null),
    Role: new FormControl(1),
  });
  SubmitClientRegisterForm(registerForm: FormGroup)
  {
    console.log(registerForm.value);
    this.isLoading = true;
    this._AuthService.clientSignUp(registerForm.value).subscribe({
      next:(response)=>{
        this.isLoading = false;
        if(response.message === 'success')
        {
           this._Router.navigate(['/login']);
        }
        else
        {
          this.error = response.message
        }
      }
    })
    //console.log(registerForm.value);
    //if(registerForm.value.RoleName == 'Client')
    //{
      this.isLoading = true;
      this._AuthService.clientSignUp(registerForm.value).subscribe({
        next:(response)=>{
          this.isLoading = false;
          if(response.message === 'success')
          {
            //this._Router.navigate(['/src/app/Pages/home'])
            this._Router.navigate(['/src/app/Pages/home']);
          }
          else
          {
            this.error = response.message
          }
        }
      })
    // }
    // else 
    // {
    //     this._AuthService.HostSignUp(registerForm.value).subscribe({
    //       next:(response)=>{
    //         if(response.message === 'success')
    //         {
    //           this._Router.navigate(['./src/app/Pages/home'])
    //           // this._Router.navigate(['/src/app/Pages/Sign/login'])
    //         }
    //         else
    //         {
    //           this.error = response.message
    //         }
    //       }
    //     })
     // }
    
  }

  // registerForm2:FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required]),
  //   firstName: new FormControl(null, [Validators.minLength(4), Validators.required]),
  //   lastName: new FormControl(null, [Validators.minLength(4), Validators.required]),
  //   RoleName: new FormControl('Host'),
  //   Role: new FormControl(1),
  // });
  
  
  ngOnInit(): void{

  }

}