import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../Services/Login/login.service';
import { PlacesService } from '../../Services/Places/places.service';
import { Place } from '../../Interfaces/place';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  constructor(private _LoginServices:LoginService , private _ActivatedRoute: ActivatedRoute, private _PlacesService: PlacesService) { }


  FilterResult:Place[] = []

  userData: any;

  ngOnInit(): void {

    // console.log("Seccess")
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        console.log("Seccess")
        let location: any = params.get("location");
        let category: any = params.get("Category");

        let capacitystring : any = params.get("capacity");
        let capacity: number = parseFloat(capacitystring) ;

        let Pricestring : any = params.get("price");
        let price: number = parseFloat(Pricestring) ;

        let ratestring: any = params.get("rate");
        let rate : number = parseFloat(ratestring) 

        this._PlacesService.FilterPlaces(location, capacity, category, price , rate).subscribe({
          next: (response) => {
            this.FilterResult = response
            console.log(this.FilterResult);
          }
        });


        console.log(params);
      } 
    });







  }}
