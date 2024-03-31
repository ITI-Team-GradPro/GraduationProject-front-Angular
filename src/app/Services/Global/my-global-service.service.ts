import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGlobalServiceService {

  constructor() { }

  OpenFilterModal(): void {
    const FilterMofal= document.getElementById("modal")
    if (FilterMofal!=null) {
      FilterMofal.style.display = "block"
    }
    console.log('Filter Modal Opened');
  }

  CloseFilterModal(): void {
    const FilterMofal= document.getElementById("modal")
    if (FilterMofal!=null) {
      FilterMofal.style.display = "none"
    }
    console.log('Filter Modal closed');
  }

}
