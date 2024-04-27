import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent {

  constructor(private router: Router) { }

  goToXRay(){
    this.router.navigate(['/x-ray'])
  }

}
