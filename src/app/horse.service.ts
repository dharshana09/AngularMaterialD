import { Injectable } from '@angular/core';
import {Horse} from './model/horse';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HorseService {

  constructor() { }

 
  getHorse(id: number): Observable<Horse> 
  {
  
    return null;
  }
}
