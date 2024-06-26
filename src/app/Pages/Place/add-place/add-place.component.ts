import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
} from '@angular/forms';
import { throwError } from 'rxjs';
import { PlacesService } from '../../../Services/places.service';
import { LoginService } from '../../../Services/Login/login.service';



@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrl: './add-place.component.css'
})
export class AddPlaceComponent implements OnInit{
  //array of selected imagess
  previewUrls: string[] = [];
  userData : any;
  IdData:object= {};

  constructor(private _PlacesService:PlacesService, private _LoginService:LoginService) {}

  ngOnInit(): void {//on intialization of form
    this._LoginService.user();
    this.userData = this._LoginService.UserData;
    this.resetForm();
  }
  TakeId(userId: string) {
    // let Name =(document.getElementById('Name') as HTMLInputElement).value;
    this.IdData= {
      userId : userId
    };
    console.log(this.IdData);
    
  }


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
  

  
  AddPlaceForm: FormGroup = new FormGroup({
    //name control
    Name: new FormControl(null, [
      Validators.minLength(3),
      Validators.required,
    ]),
    //price control
    Price: new FormControl(null, [Validators.required, Validators.min(1)]),
    //location control
    Location: new FormControl(null, [
      Validators.required,
    ]),
    //location description
    Description: new FormControl(null, [
      Validators.required,
      Validators.maxLength(1000),
    ]),
    //place capacity
    PeopleCapacity: new FormControl(null, [
      Validators.min(1),
      Validators.required,
    ]),
    OwnerId: new FormControl(''),
    //place category
    CategoryName: new FormControl(null, [Validators.required]),
    //place images
    files: new FormControl([],[Validators.required]),
  });
  

  error:string = '';
  isLoading:boolean = false;
  AddPlaces(AddPlaceForm: FormGroup)
  {
    console.log(AddPlaceForm.value);
    //console.log(this.userData);
    
    this.isLoading = true;
    this._PlacesService.AddPlace(AddPlaceForm.value).subscribe({
      next:(Response)=>{
        this.isLoading = false;
        console.log(Response)
        if(Response.message === "Place Added Successfully.")
        {
            // this._PlacesService.navigate(["/Login"])
            console.log("success");
            
        }
        else
        {
          this.error = Response.message
        }
      }
    })
  }

  // submitForm(): void {
  //   if (this.AddPlaceForm.invalid) return;
  //   console.log(`You submitted: ${JSON.stringify(this.AddPlaceForm.value)}`);
  // }

  resetForm(): void {
    this.AddPlaceForm.reset();
    this.previewUrls = [];
    this.AddPlaceForm.get('OwnerId')?.setValue(this.userData.Id);
    this.AddPlaceForm.get('files') as FormArray
  }
}
