import { Component } from '@angular/core';

@Component({
  selector: 'app-place-card',
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.css'
})
export class PlaceCardComponent {

  CarImg:string[] = [
   "../../../assets/Imgs/Hero3.jpg" , 
   "../../../assets/Imgs/Hero2.jpg" , 
   "../../../assets/Imgs/hero1.jpg" , 
   "../../../assets/Imgs/hero4.jpg" , 
  ]

  toggleMenu() {
    this.isfav = !this.isfav;
  }

  isfav:boolean = false

}
