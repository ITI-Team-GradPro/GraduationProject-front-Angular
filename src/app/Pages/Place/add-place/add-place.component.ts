import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
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

  //on selection function to handle preview
  onFilesSelected(event: any) {
    this.previewUrls = []; // Reset previewUrls on new selection
    let files = event.target.files;
    if (files.length < 5) {
      this.resetForm();
      alert('Please select at least 5 images');
      return;
    } 
    else {
      for (const file of files) {
        //allowed formats
        const validImageTypes = [
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
          'image/svg+xml',
        ];

        if (!validImageTypes.includes(file.type)) {
          alert(
            'Only images in JPEG, PNG, GIF, svg/xml or webp format are allowed.'
          );
          continue; //skip this file
        } else {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.previewUrls.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }

  //on files drop into input cancel select if any file is not a picture
  onFileDrop(event: any) {
    const files = event.dataTransfer.files;
    if(files.length < 5){
      alert('You must upload 5 images at least');
      files.forEach(()=>{
        event.dataTransfer.items.remove(event.dataTransfer.items.get(0));
      });
      return;
    }
    for (const file of files) {
      if (!(file instanceof File && file.type.match('image.*'))) {
        alert(
          'The items you dropped into input contains unsupported data types. Only images are allowed!'
        );
        files.item().remove(); // remove non image file from list
      }
    }
  }

  ngOnInit() {//on intialization of form
    this.resetForm();
  }

  AddPlaceForm: FormGroup = new FormGroup({
    //name control
    PlaceName: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
    //price control
    PlacePrice: new FormControl(null, [Validators.required, Validators.min(1)]),
    //location control
    PlaceLocation: new FormControl(null, [
      Validators.required,
    ]),
    //location description
    PlaceDescription: new FormControl(null, [
      Validators.required,
      Validators.maxLength(1000),
    ]),
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

  // submitForm(): void {
  //   if (this.AddPlaceForm.invalid) return;
  //   console.log(`You submitted: ${JSON.stringify(this.AddPlaceForm.value)}`);
  // }

  resetForm(): void {
    this.AddPlaceForm.reset();
    this.previewUrls = [];
  }
}
