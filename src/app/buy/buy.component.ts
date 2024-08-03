import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  directions:any
  payment:string=''
  showPayOnline:boolean=false
  showChoosePay:boolean=true
  fileName:string=''
  constructor(private translate:TranslateService,public dialog:MatDialogRef<BuyComponent>){
  }
  cashForm:FormGroup=new FormGroup({
    cash:new FormControl(null,[Validators.required]),
    VodafoneCash:new FormControl(null,[Validators.required])
    })
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
cashMethod(){
console.log(this.payment);
if(this.payment==''){
  Swal.fire({
    icon: "error",
    text: this.translate.instant("buyTS.error"),
  });
}else if(this.payment=='cash'){
  Swal.fire({
    icon: "success",
    text: this.translate.instant("buyTS.success"),
  });
  this.dialog.close()
}else{
  this.showChoosePay=false
  this.showPayOnline=true
}
}
getPaymentMethod(event:any){
  this.payment=event.value
}
selectImage(event:any){
this.fileName=event.target.value
}
}
