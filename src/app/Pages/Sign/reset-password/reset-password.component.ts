import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
onSubmit(arg0: FormGroup<any>) {
throw new Error('Method not implemented.');
}
  ResetPassForm: FormGroup = new FormGroup({
    ResetCode: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
}
