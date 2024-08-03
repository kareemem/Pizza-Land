import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { DetaislDialogComponent } from '../detaisl-dialog/detaisl-dialog.component';
import { BuyComponent } from '../buy/buy.component';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
directions:any
showBuy:boolean=false
da:any[]=['../../assets/item-65cdda07cbb6e.webp','../../assets/banner-65cdd90b396fc.jpg']
constructor(public dialog:MatDialog, private _MenuService:MenuService){}
ngOnInit(): void {
  this.changeActiveLink()
    if(localStorage.getItem('lang')=='en'){
      this.directions='ltr'
    }else{
      this.directions='rtl'
    }
    this.changeShowBuy()
}

changeShowBuy(){
this._MenuService.purchasePlan.subscribe({
  next:()=>{
    this.showBuy=this._MenuService.purchasePlan.getValue()
  }
})
}

changeActiveLink(){
  let links=document.querySelectorAll('a')
  links.forEach(e=>{
    e.addEventListener('click',function(){
      links.forEach(e=>e.classList.remove('active'))
      e.classList.add('active')

    })
  })
}


showDialog(da:any){
const dialogRef = this.dialog.open(DetaislDialogComponent, {
  width:'750px',
  data:da,
  disableClose:true,
});

// dialogRef.afterClosed().subscribe(result => {

// });
}

showDialogBuy(){
  const dialogRef = this.dialog.open(BuyComponent, {
    width:'750px',
    disableClose:true,
  });
}



}
