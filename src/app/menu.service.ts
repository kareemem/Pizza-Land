import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  purchasePlan=new BehaviorSubject(false)
  constructor() { }
}
