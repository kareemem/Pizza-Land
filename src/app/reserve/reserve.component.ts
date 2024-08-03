import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit{
directions:any
  ngOnInit(): void {
  if(localStorage.getItem('lang')=='en'){
    this.directions='ltr'
  }else{
    this.directions='rtl'
  }
}
}
