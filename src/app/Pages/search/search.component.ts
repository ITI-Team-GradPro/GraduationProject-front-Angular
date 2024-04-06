import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../Services/Login/login.service';
import { PlacesService } from '../../Services/Places/places.service';
import { Place } from '../../Interfaces/place';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private _LoginServices:LoginService , private _ActivatedRoute: ActivatedRoute, private _PlacesService: PlacesService) { }


  SearchResult:Place[] = []

  userData: any;

  ngOnInit(): void {

    // console.log("Seccess")
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let nameParams: any = params.get("name");
        console.log("Seccess")
        this._PlacesService.SearchPlaces(nameParams).subscribe({
          next: (response) => {
            this.SearchResult = response
            console.log(this.SearchResult);
          }
        });


        console.log(nameParams);
      } 
    });




}}
