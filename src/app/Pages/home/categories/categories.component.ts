import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../../Services/Places/places.service';
import { Place } from '../../../Interfaces/place';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit  {
  constructor(private _ActivatedRoute: ActivatedRoute, private _PlacesService: PlacesService) { }

  CatigoryPlaces:Place[] = []

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let IdParam: any = params.get("category");
        this._PlacesService.getPlacesWithCategory(IdParam).subscribe({
          next: (response) => {
            // console.log(response);

            this.CatigoryPlaces = response
            console.log(this.CatigoryPlaces)
          }
        });

        console.log(IdParam);
      }
    });
  }





}
