import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from'@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  registerForm:FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.minLength(4), Validators.required]),
    last_name: new FormControl(null, [Validators.minLength(4), Validators.required]),
    //age: new FormControl(null, [Validators.min(16), Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    Role: new FormControl('guest'),
  });
  SubmitRegisterForm(registerForm: FormGroup)
  {
    console.log(registerForm);
  }
  constructor() { }
  ngOnInit(): void{

  }

}
