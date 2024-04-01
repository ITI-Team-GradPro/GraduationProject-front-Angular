import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrl: './add-place.component.css',
})
export class AddPlaceComponent {
  ngOnInit() {
    this.resetForm();
  }

  AddPlaceForm: FormGroup = new FormGroup({
    //name control
    PlaceName: new FormControl(null, [
      Validators.minLength(3),

      Validators.required,
      Validators.maxLength(50),
    ]),
    //price control
    PlacePrice: new FormControl(null, [
      Validators.required,
      Validators.min(1),
    ]),
    //location control
    PlaceLocation: new FormControl(null, [Validators.maxLength(100), Validators.required]),
    //location description
    PlaceDescription: new FormControl(null, [Validators.maxLength(256)]),
    //place capacity
    PlaceCapacity: new FormControl(null, [
      Validators.min(1),
      Validators.required
    ]),
    //place category
    PlaceCategory: new FormControl(null, [Validators.required]),
    //place images
    PlaceImages: new FormControl(null, [Validators.required]),
  });

  constructor(private fb: FormBuilder) {}

  get Name() {
    return this.AddPlaceForm.get('PlaceName');
  }
  get Price() {
    return this.AddPlaceForm.get('PlacePrice');
  }
  get Address() {
    return this.AddPlaceForm.get('PlaceAddress');
  }

  submitForm(): void {
    if (this.AddPlaceForm.invalid) return;
    console.log(`You submitted: ${JSON.stringify(this.AddPlaceForm.value)}`);
  }

  resetForm(): void {
    this.AddPlaceForm.reset();
  }
}
