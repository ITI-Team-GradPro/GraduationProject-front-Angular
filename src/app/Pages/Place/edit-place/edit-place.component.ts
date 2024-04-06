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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrl: './edit-place.component.css',
})
export class EditPlaceComponent {
  //array of selected imagess
  previewUrls: string[] = [];
  intialFormValues: any;
  
  userData : any;

  private getuser(id:number){
    if(id === this.userData)
      {
        this.userData = {
          Name: null,
          //price control
          Price: null,
          //location control
          Location: null,
          //location description
          Description: null,
          //place capacity
          PeopleCapacity: null,
          OwnerId: '',
          //place category
          CategoryName: 'selected',
          //place images
          files: null,
        };
      }
      else{
        this.userData = this._PlacesService.updatePlaceDataNoPic(id);
      }
  }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap =>{
      const id = +parameterMap.getAll('id') ;
      this.getuser(id);
    });
    this._LoginService.user();
    //this.userData = this._LoginService.UserData;



    // const cld = new Cloudinary({ cloud: { cloudName: 'dkqgchxph' } });
    // this._PlacesService.GetPlaceDataById(9).subscribe((response)=>{
    // console.log(response);
    // this.intialFormValues=response;
    
    // this.resetForm();
    // });
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

  resetForm() {
    this.editplaceform.get('Name')?.setValue(this.userData.Name);
    this.editplaceform.get('Price')?.setValue(this.userData.Price);
    this.editplaceform.get('Location')?.setValue(this.userData.Location);
    this.editplaceform.get('Description')?.setValue(this.userData.Description);
    this.editplaceform.get('PeopleCapacity')?.setValue(this.userData.PeopleCapacity);
    this.editplaceform.get('OwnerId')?.setValue(this.userData.Id);
    this.editplaceform.get('CategoryName')?.setValue(this.userData.CategoryName);
    this.editplaceform.get('files')?.setValue(this.userData.files);

    this.editplaceform.reset();
    //to remove older images preview not the images themselves
    // const oldImages = document.getElementsByClassName('oldImages');

    // while (oldImages.length > 0) {
    //   oldImages[0].remove(); // Remove the first element each time
    // }
    // this.previewUrls = [];
  }
  //
  editplaceform: FormGroup = new FormGroup({
    //name control
    Name: new FormControl(''),
    //price control
    Price: new FormControl(''),
    //location control
    Location: new FormControl(''),
    //location description
    Description: new FormControl(''),
    //place capacity
    PeopleCapacity: new FormControl(''),
    OwnerId: new FormControl(''),
    //place category
    CategoryName: new FormControl(''),
    //place images
    files: new FormControl(''),
  });

  error:string = '';
  isLoading:boolean = false;
  EditPlace(editplaceform:FormGroup){
    console.log(editplaceform.value);
    //console.log(this.userData);

    this.isLoading = true;
    this._PlacesService.AddPlace(editplaceform.value).subscribe({
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
  
  constructor(
    private fb: FormBuilder,
    private _PlacesService: PlacesService,
    private _LoginService: LoginService,
    private http: HttpClient,
    private _route :ActivatedRoute
    
  ) {}
  editdata: any;
  
  loaduserdata(Id: any) {
    this._LoginService.UserData(Id).subscribe((response: any) => {
      this.editdata = response;
      console.log(this.editdata);
      // this.registerform.setValue({
      //   id: this.editdata.id, name: this.editdata.name,
      //   password: this.editdata.password, email: this.editdata.email, gender: this.editdata.gender,
      //   role: this.editdata.role, isactive: this.editdata.isactive
      // });
    });
  }
}
