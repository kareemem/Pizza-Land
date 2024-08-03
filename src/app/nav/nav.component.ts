import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  lang:any
  constructor(private translate:TranslateService,private _MenuService:MenuService){
    this.lang=this.translate.currentLang
  }
  ngOnInit(): void {
    this.changeDarkMode()
    this.changePurchasePlan()
    this.load()
  }
  changeLanguage(){
    if(this.lang == "en"){
      localStorage.setItem('lang','ar')
      this.lang="ar"
    }else{
      localStorage.setItem('lang','en')
      this.lang="en"
    }
    window.location.reload()
  }

  changeDarkMode(){
    const body =document.querySelector('body');
    const btn = document.querySelector('.btnDarkMode');
    const icon =document .querySelector('.btn_icon')
    btn?.addEventListener('click',()=>{
  body?.classList.toggle('darkMode');
  icon?.classList.add('animated');
  this.store(body?.classList.contains('darkMode'))
  if(body?.classList.contains('darkMode')){
    icon?.classList.remove('fa-sun');
    icon?.classList.add('fa-moon');
    window.location.reload()

  }else{
    icon?.classList.remove('fa-moon');
    icon?.classList.add('fa-sun');
    window.location.reload()

  }
  setTimeout(() => {
    icon?.classList.remove('animated')
  }, 500);
})
}


changePurchasePlan(){
  const toggle=document.querySelector('.toggle')
  const toggleBtn=document.querySelector('.toggle-button')
  toggle?.addEventListener('click',()=>{
    toggleBtn?.classList.toggle('active')
    toggle?.classList.toggle('bgActive')
    if(toggleBtn?.classList.contains('active')){
      this._MenuService.purchasePlan.next(true)
    }else{
      this._MenuService.purchasePlan.next(false)
    }
  })
}
store(value:any){
  localStorage.setItem('darkMode',value)
}

load(){
  const body =document.querySelector('body');
  const darkMode= localStorage.getItem('darkMode');
  const icon =document .querySelector('.btn_icon')
  if(!darkMode){
    this.store(false);
    icon?.classList.add('fa-sun')
  }else if(darkMode == 'true'){
    body?.classList.add('darkMode');
    icon?.classList.add('fa-moon')
  }else if(darkMode == 'false'){
    icon?.classList.add('fa-sun');
  }
}

}
