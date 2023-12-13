import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  
  constructor() { }

  getPrice(numberOfNights: number):number
  {
    let cena=8000;
    return numberOfNights*cena;
  }
}
