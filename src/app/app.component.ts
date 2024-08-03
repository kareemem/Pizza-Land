import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'pizzaLand';
  lang:any
  ngOnInit(): void {
    this.load()
    this._NgwWowService.init()
  }
  constructor(private translate: TranslateService,private _NgwWowService:NgwWowService) {
    translate.setDefaultLang('en');
    this.lang=localStorage.getItem('lang')
    translate.use(this.lang);
  }
  

  load(){
    const darkMode= localStorage.getItem('darkMode');
    if(!darkMode){
      document.documentElement.style.setProperty('--change-lightMode','#f7f7f7')
      document.documentElement.style.setProperty('--change-darkMode','#2b2b2b')
      document.documentElement.style.setProperty('--change-rate','#212529')
      document.documentElement.style.setProperty('--change-del','#778899')
    }else if(darkMode == 'true'){
      document.documentElement.style.setProperty('--change-lightMode','#2b2b2b')
      document.documentElement.style.setProperty('--change-darkMode','#f7f7f7')
      document.documentElement.style.setProperty('--change-rate','#f8cccc')
      document.documentElement.style.setProperty('--change-del','#d80909')
    }else if(darkMode == 'false'){
      document.documentElement.style.setProperty('--change-lightMode','#f7f7f7')
      document.documentElement.style.setProperty('--change-darkMode','#2b2b2b')
      document.documentElement.style.setProperty('--change-rate','#212529')
      document.documentElement.style.setProperty('--change-del','#778899')
    }
  }

}

