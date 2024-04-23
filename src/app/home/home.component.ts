import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    {
      src: 'image1.jpeg'
    },
    {
      src: 'image2.jpeg'
    },
    {
      src: 'image3.jpeg'
    },
    {
      src: 'image4.jpeg'
    },
    {
      src: 'image5.jpg'
    },
    {
      src: 'image7.jpeg'
    }
  ]

}
