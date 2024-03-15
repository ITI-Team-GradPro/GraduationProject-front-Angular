import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css',
})
export class NewPasswordComponent {
  NewPassForm: FormGroup = new FormGroup({
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/
      ),
    ]),
    confirm_password: new FormControl(null, [Validators.required]),
  });

  onSubmit(NewPassForm: FormGroup): void {
    let pass: any = NewPassForm.get('password');
    let confirmPass: any = NewPassForm.get('confirm_password');

    if (pass.value !== confirmPass.value) {
      alert('Your Password and Confirm Password did not match!');
      return; // Return void explicitly
    } else {
      console.log("You've entered the same Password!");
      return; // Return void explicitly
    }
  }
}
