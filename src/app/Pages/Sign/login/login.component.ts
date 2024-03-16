import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [Validators.required]),
  });
  SubmitLoginForm(registerForm: FormGroup)
  {
    console.log(registerForm.value);
  }
  constructor() { }
  ngOnInit(): void{

  }

}