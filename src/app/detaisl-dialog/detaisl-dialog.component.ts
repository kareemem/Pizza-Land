import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-detaisl-dialog',
  templateUrl: './detaisl-dialog.component.html',
  styleUrls: ['./detaisl-dialog.component.css']
})
export class DetaislDialogComponent implements OnInit {
  rating:number=0
  directions:any
  description:boolean=false
  constructor(private translate:TranslateService,@Inject(MAT_DIALOG_DATA) public data: any,public dialog:MatDialogRef<DetaislDialogComponent>){}
ngOnInit(): void {
    if(localStorage.getItem('lang')=='en'){
      this.directions='ltr'
    }else{
      this.directions='rtl'
    }
}
close(){
  this.dialog.close()
}
selectRating(event:any){
  console.log(event.target.value);
  this.rating=event.target.value
}
showDesc(){
  const iconShow =document.querySelector('.iconShow')
  if(iconShow?.classList.contains('fa-arrow-down')==true){
    this.description=true
    iconShow?.classList.replace('fa-arrow-down','fa-arrow-up')
  }else{
    this.description=false
    iconShow?.classList.replace('fa-arrow-up','fa-arrow-down')
  }

}
}
