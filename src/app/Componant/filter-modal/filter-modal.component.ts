import { Component } from '@angular/core';
import { MyGlobalServiceService } from '../../Services/Global/my-global-service.service';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.css'
})
export class FilterModalComponent {

  constructor(private myGlobalService: MyGlobalServiceService) { }
  // Method to call the globally accessible function
  CloseFilter(): void {
    this.myGlobalService.CloseFilterModal();
  }

}
