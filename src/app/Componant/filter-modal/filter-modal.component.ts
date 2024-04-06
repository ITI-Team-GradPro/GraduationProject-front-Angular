import { Component } from '@angular/core';
import { MyGlobalServiceService } from '../../Services/Global/my-global-service.service';
import { PlacesService } from '../../Services/Places/places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.css'
})
export class FilterModalComponent {

  constructor(private _router:Router , private myGlobalService: MyGlobalServiceService , private _PlaceService : PlacesService ) { }
  // Method to call the globally accessible function
  CloseFilter(): void {
    this.myGlobalService.CloseFilterModal();
  }

  ngOnInit(): void {
  }

  applyFilters(location: string, capacity: string, category: string, price: string, rate: string): void {
    // Navigate to the filter route with input values as parameters
    this._router.navigate(['/Filter', location, capacity, category, price, rate])
    this.myGlobalService.CloseFilterModal();

  
  }




}
