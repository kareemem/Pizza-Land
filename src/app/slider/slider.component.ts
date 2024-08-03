import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  directions:any
  ngOnInit(): void {
    if(localStorage.getItem('lang')=='en'){
      this.directions='ltr'
    }else{
      this.directions='rtl'
    }
  }
  slidesStore:any[]=['assets/banner-65cdd9410d0e5.jpg','assets/banner-65cdd9410d0e5.jpg','assets/banner-65cdd9410d0e5.jpg']
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
