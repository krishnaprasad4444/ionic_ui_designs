import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.page.html',
  styleUrls: ['./custom-tab.page.scss'],
})
export class CustomTabPage implements OnInit {
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  };

  constructor() {}

  ngOnInit() {}
}
