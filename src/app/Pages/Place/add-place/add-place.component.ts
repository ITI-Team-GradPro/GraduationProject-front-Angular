import { Component, OnInit } from '@angular/core';
// import { DragEvent } from '@angular/cdk/drag-drop';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrl: './add-place.component.css',
})
export class AddPlaceComponent {
  //array of selected imagess
  previewUrls: string[] = [];

  onFilesSelected(event: any) {
    this.previewUrls = []; // Reset previewUrls on new selection
    const files = event.target.files;
    for (const file of files) {
      if (file && file.type.match('image.*')) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.previewUrls.push(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        prompt("Only images are allowed!");
      }
    }
  }

  // previewImages: string[] = [];
  // onImageDrop(event: DragEvent) {
  //   this.previewImages = []; // Array to store preview URLs
  //   // const files = event.dataTransfer.files;
  //   // for (const file of files) {
  //   //   this.readImage(file);
  //   // }
  // }
  // readImage(file: File) {
  //   const reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     this.previewImages.push(e.target.result); // Add preview URL to array
  //   };
  //   reader.readAsDataURL(file);
  // }

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
    PlacePrice: new FormControl(null, [Validators.required, Validators.min(1)]),
    //location control
    PlaceLocation: new FormControl(null, [
      Validators.maxLength(100),
      Validators.required,
    ]),
    //location description
    PlaceDescription: new FormControl(null, [Validators.maxLength(256)]),
    //place capacity
    PlaceCapacity: new FormControl(null, [
      Validators.min(1),
      Validators.required,
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
