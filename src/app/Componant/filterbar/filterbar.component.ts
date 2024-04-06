import { Component } from '@angular/core';
import { MyGlobalServiceService } from '../../Services/Global/my-global-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrl: './filterbar.component.css'
})
export class FilterbarComponent {

  constructor(private myGlobalService: MyGlobalServiceService , private router: Router) { }

  // Method to call the globally accessible function
  OpenFilter(): void {
    this.myGlobalService.OpenFilterModal();
  }

  searchValue: string = '';


  search() {
    
    if (this.searchValue.trim() !== '') {
      this.router.navigate(['/Search', this.searchValue]);
    }
  }


}
