import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../../Services/Places/places.service';
import { PlaceDetails } from '../../../Interfaces/place';
import { LoginService } from '../../../Services/Login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../../Services/toastServices/toast.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'] 
})
export class PlaceDetailsComponent implements OnInit {

  constructor( 
    private fb: FormBuilder,
    private _ToastServises:ToastService ,private _LoginServices:LoginService , private _ActivatedRoute: ActivatedRoute, private _PlacesService: PlacesService ) {}

  // isDisabled: boolean = false;
  Review:object = {}


  userData: any;

  PlaceDetail:PlaceDetails = {} as PlaceDetails

  ViewReview:boolean = false;

  rating: number = 0
  stars: number[] = [1, 2, 3, 4, 5];
  comment: string = ''; // Review comment

  // Method to set the rating when a star is clicked
  setRating(selectedRating: number): void {
    this.rating = selectedRating;
  }

      View(){
        this.ViewReview = !this.ViewReview
      }

  // Method to submit the review
  submitReview(PlaceId:number , UserId:string ): void {
     this.Review = {
      reviewText : this.comment ,
      rating : this.rating
    }
    // Perform actions to submit the review, e.g., send to server
    console.log('object:', this.Review);


    this.AddReview(PlaceId , UserId , this.Review )
  }
 
  Token:boolean = false

  reloadPageAfterReview():void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let IdParam: any = params.get("id");
        this._PlacesService.getPlaceDetails(IdParam).subscribe({
          next: (response) => {
            this.PlaceDetail = response
            console.log(this.PlaceDetail);
          }
        });

        if (localStorage.getItem("Token") != null) {
          this.Token = true
        } else {
          this.Token = false
        }

        this._LoginServices.user();
        this.userData = this._LoginServices.UserData; // Assign user data to the userData variable
    
        console.log(IdParam);
      } 
    });
  }



  AddReview(PlaceId :number , UserId:string , Review:object ){
    this._PlacesService.AddReview(PlaceId , UserId , Review).subscribe({
      next : (response) => {
        console.log(response)
        this.reloadPageAfterReview()
      }
    })
  }


Booking:object = {}
totalPrice:any
bookingStatus:any
period:any
paramidd:any

SubmitBooking(totalPrice: number): void {
  this.totalPrice = totalPrice;
  const BookinDate = document.getElementById('BookinDate') as HTMLInputElement;

  if (BookinDate) {
    const eventDate = BookinDate.value;
    console.log('Event date:', eventDate);

    this.Booking = {
        userId: this.userData = this._LoginServices.UserData.Id,
        placeId: this.paramidd,
        totalPrice: this.totalPrice,
        bookingStatus: 0,
        eventDate: eventDate, // Assign the value of the input element, not the element itself
        bookingDate: new Date(),
        period: this.period
    };

    console.log(this.Booking);
  } else {
    console.log('Input element with ID "BookinDate" not found.');
  }

  this._PlacesService.PlaceBooking(this.Booking).subscribe({
    next : (Response) => {
      console.log(Response)
      this._ToastServises.showToast("Your Bookin Add Succefully")
    }
  
  })



}



  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let IdParam: any = params.get("id");
          this.paramidd = IdParam
          // this.Booking = {
          //   userId:  this.userData = this._LoginServices.UserData.Id,
          //   placeId: IdParam,
          //   totalPrice: this.totalPrice,
          //   bookingStatus: 0,
          //   bookingDate: new Date(),
          //   period: this.period
          // }
  
   




        this._PlacesService.getPlaceDetails(IdParam).subscribe({
          next: (response) => {
            this.PlaceDetail = response
            console.log(this.PlaceDetail);
          }
        });

        if (localStorage.getItem("Token") != null) {
          this.Token = true
        } else {
          this.Token = false
        }

        this._LoginServices.user();
        // Assign user data to the userData variable
    

        console.log(IdParam);
      } 
    });
  }

  // paymentForm: FormGroup;




  // createForm() {
  //   this.paymentForm = this.fb.group({
  //     cardType: ['', Validators.required], // New field for card type
  //     name: ['', Validators.required],
  //     cardNumber: ['', Validators.required],
  //     expMonth: ['', Validators.required],
  //     expYear: ['', Validators.required],
  //     cvc: ['', Validators.required]
  //   });
  // }



  
}