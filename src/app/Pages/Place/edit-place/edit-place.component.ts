import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  SelectControlValueAccessor,
} from '@angular/forms';
import { throwError } from 'rxjs';
import { CssSelector } from '@angular/compiler';
import { PlacesService } from '../../../Services/places.service';
import { LoginService } from '../../../Services/Login/login.service';
import { json } from 'stream/consumers';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrl: './edit-place.component.css',
})
export class EditPlaceComponent {
  //array of selected imagess
  previewUrls: string[] = [];
  intialFormValues: any;
  



  ngOnInit() {
    // const cld = new Cloudinary({ cloud: { cloudName: 'dkqgchxph' } });
    this._PlacesService.GetPlaceDataById(9).subscribe((response)=>{
      console.log(response);
      this.intialFormValues=response;
    });
  }

  
  //on selection function to handle preview
  onFilesSelected(event: any) {
    this.previewUrls = []; // Reset previewUrls on new selection
    const files = event.target.files;
    if (files.length < 5) {
      this.resetForm();
      alert('Please select at least 5 images');
      return;
    } else {
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

  onFileDrop(event: any) {
    const files = event.dataTransfer.files;
    for (const file of files) {
      if (!(file instanceof File && file.type.match('image.*'))) {
        alert(
          'The items you dropped into input contains unsupported data types. Only images are allowed!'
        );
        files.item().remove(); // remove non image file from list
      }
    }
  }

  //
  editplaceform: FormGroup = new FormGroup({
    //name control
    Name: new FormControl(null, [Validators.minLength(3)]),
    //price control
    Price: new FormControl(null, [Validators.min(1)]),
    //location control
    Location: new FormControl(null),
    //location description
    Description: new FormControl(null, [
      Validators.required,
      Validators.maxLength(1000),
    ]),
    //place capacity
    PeopleCapacity: new FormControl(null, [
      Validators.min(1),
      // Validators.required,
    ]),
    //place category
    CategoryName: new FormControl(null),
    //place images
    files: new FormControl(null),
  });

  //
  constructor(
    private fb: FormBuilder,
    private _PlacesService: PlacesService,
    private _LoginService: LoginService,
    private http: HttpClient
  ) {}

  resetForm(): void {
    this.editplaceform.reset();
    //to remove older images preview not the images themselves
    // const oldImages = document.getElementsByClassName('oldImages');

    // while (oldImages.length > 0) {
    //   oldImages[0].remove(); // Remove the first element each time
    // }
    // this.previewUrls = [];
  }
}
