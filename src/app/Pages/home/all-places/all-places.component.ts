import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../../Services/Places/places.service';
import { Place } from '../../../Interfaces/place';

@Component({
  selector: 'app-all-places',
  templateUrl: './all-places.component.html',
  styleUrl: './all-places.component.css'
})
export class AllPlacesComponent implements OnInit {
  constructor(private _PlacesService:PlacesService){}
  // for all Places Data
  AllPlaces:Place[] = []
  
  ngOnInit(): void {
    this._PlacesService.getAllPlaces().subscribe(
      {
        next : (response) => {
          // console.log(response)
          this.AllPlaces = response
          console.log(this.AllPlaces)

        }
      }
    )
  }
}
