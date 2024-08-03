import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  lang:any
  directions:any
  constructor(private translate:TranslateService ,private wowService: NgwWowService){
    this.wowService.init()
  }
  ngOnInit(): void {
    if(localStorage.getItem('lang')=='en'){
      this.directions='ltr'
    }else{
      this.directions='rtl'
    }
    this.wowService.init()

  }


}
