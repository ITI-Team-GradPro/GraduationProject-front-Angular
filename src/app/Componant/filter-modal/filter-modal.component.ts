import { Component } from '@angular/core';
import { MyGlobalServiceService } from '../../Services/Global/my-global-service.service';
import { PlacesService } from '../../Services/Places/places.service';
import { Router } from '@angular/router';
import { MyPlaceService } from '../../Services/MyPlace/my-place.service';
import { Category } from '../../Interfaces/place';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.css'
})
export class FilterModalComponent {

  Allcategpries:Category[] = []


  constructor(private _router:Router , private _MyPlaceService:MyPlaceService ,private myGlobalService: MyGlobalServiceService , private _PlaceService : PlacesService ) { }
  // Method to call the globally accessible function
  CloseFilter(): void {
    this.myGlobalService.CloseFilterModal();
  }

  ngOnInit(): void {
    
    this._MyPlaceService.getallcategory().subscribe(
      {
        next : (response) => {
          // console.log(response)
          this.Allcategpries = response
          console.log(response)

        }
      }
    )
  }




  applyFilters(location: string, capacity: string, category: string, price: string, rate: string): void {
    // Navigate to the filter route with input values as parameters
    this._router.navigate(['/Filter', location, capacity, category, price, rate])
    this.myGlobalService.CloseFilterModal();
  }

  // categories = [
  //   { name: 'BirthDay' },
  //   { name: 'Wedding' },
  //   { name: 'PhotoSession' },
  //   { name: 'inDoor' },
  //   { name: 'outDoor' },
  //   { name: 'asasasassa' }
  // ];
  
  // isSelectOpen = false;

  // onSelect(event: Event): void {
  //   const target = event.target as HTMLSelectElement;
  //   const selectedOptions = Array.from(target.selectedOptions).map(option => option.value);
  //   console.log('Selected categories:', selectedOptions);
  //   // You can use selectedOptions as needed
  // }

  // toggleSelect(): void {
  //   this.isSelectOpen = !this.isSelectOpen;
  // }


}
