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
@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrl: './edit-place.component.css',
})
export class EditPlaceComponent {
  //array of selected imagess
  previewUrls: string[] = [];
  intialValues: any;

  //on selection function to handle preview
  onFilesSelected(event: any) {
    this.previewUrls = []; // Reset previewUrls on new selection
    const files = event.target.files;
    if (files.length < 5) {
      alert('Please select at least 5 images');
      event.target.value = null;
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

  onEditClick(event: any){
    let Pic=document.getElementById("editableImg");
    Pic?.setAttribute("src", '');
    this.onEditSelect();
  }


  onEditSelect(){
    console.log("Inside Edit Select Function");
    var selectBox= <HTMLSelectElement>document.getElementById("editableImg")!;
    selectBox.disabled=false;
  }
  
  ngOnInit() {
    this.intialValues = this.editplaceform.value;
    this.editplaceform.reset();
    this.previewUrls = [];
  }

  editplaceform: FormGroup = new FormGroup({
    //name control
    PlaceName: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(50),
      // Validators.required
    ]),
    //price control
    PlacePrice: new FormControl(null, [Validators.min(1)]),
    //location control
    PlaceLocation: new FormControl(null, [Validators.maxLength(256)]),
    //location description
    PlaceDescription: new FormControl(null, [
      Validators.required,
      Validators.maxLength(1000),
    ]),
    //place capacity
    PlaceCapacity: new FormControl(null, [
      Validators.min(1),
      // Validators.required,
    ]),
    //place category
    PlaceCategory: new FormControl(null),
    //place images
    PlaceImages: new FormControl(null),
  });

  constructor(private fb: FormBuilder) {}

  resetForm(): void {
    this.editplaceform.reset();

    //to remove older images preview not the images themselves
    const oldImages = document.getElementsByClassName('oldImages');

    while (oldImages.length > 0) {
      oldImages[0].remove(); // Remove the first element each time
    }
    this.previewUrls = [];
  }
}
