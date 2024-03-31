import { Component } from '@angular/core';
import { MyGlobalServiceService } from '../../Services/Global/my-global-service.service';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrl: './filterbar.component.css'
})
export class FilterbarComponent {

  constructor(private myGlobalService: MyGlobalServiceService) { }

  // Method to call the globally accessible function
  OpenFilter(): void {
    this.myGlobalService.OpenFilterModal();
  }


}
