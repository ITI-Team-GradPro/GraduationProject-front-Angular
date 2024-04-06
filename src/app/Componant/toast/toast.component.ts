import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../Services/toastServices/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  message: string | undefined;

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toast$.subscribe(message => {
      this.message = message;
      setTimeout(() => {
        this.message = undefined;
      }, 5000); 
    });
  }
}
