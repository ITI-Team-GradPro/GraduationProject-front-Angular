import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  onSubmit(arg0: FormGroup<any>) {
    throw new Error('Method not implemented.');
  }
  ForgotPassForm: FormGroup = new FormGroup({
    TargetEmail: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
  });
}
