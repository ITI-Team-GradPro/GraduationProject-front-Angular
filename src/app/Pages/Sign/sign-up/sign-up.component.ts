import { ApplicationConfig, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
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
    first_name: new FormControl(null, [Validators.minLength(4), Validators.required]),
    last_name: new FormControl(null, [Validators.minLength(4), Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    Role: new FormControl('Guest'),
  });
  SubmitClientRegisterForm(registerForm: FormGroup)
  {
    //console.log(registerForm.value);
    this.isLoading = true;
    this._AuthService.clientSignUp(registerForm.value).subscribe({
      next:(response)=>{
        this.isLoading = false;
        if(response.message === 'success')
        {
          //this._Router.navigate(['/src/app/Pages/home'])
           this._Router.navigate(['/login']);
        }
        else
        {
          this.error = response.message
        }
      }
    })
  }

  // registerForm2:FormGroup = new FormGroup({
  //   first_name: new FormControl(null, [Validators.minLength(4), Validators.required]),
  //   last_name: new FormControl(null, [Validators.minLength(4), Validators.required]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   Password: new FormControl(null, [Validators.required]),
  //   confirmPassword: new FormControl(null, [Validators.required]),
  //   Role: new FormControl('Host'),
  // });
  SubmitHostregisterForm(registerForm: FormGroup) {
    this._AuthService.HostSignUp(registerForm.value).subscribe({
      next:(response)=>{
        if(response.message === 'success')
        {
          this._Router.navigate(['./src/app/Pages/home'])
          // this._Router.navigate(['/src/app/Pages/Sign/login'])
        }
        else
        {
          this.error = response.message
        }
      }
    })
  }
  
  ngOnInit(): void{

  }

}