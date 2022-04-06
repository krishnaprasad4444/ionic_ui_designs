import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options = {
    centeredSlides: true,
    loop: true,
    spaceBetween: -100,
  };

  constructor() {}
}
