import { Component } from '@angular/core';
import { Rooms } from './rooms.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  rooms:Rooms[];
  constructor()
  {
    this.rooms=[new Rooms("jednokrevetna",9000),new Rooms("dvokrevetna",12000),new Rooms("trokrevetna",16000)];
  }

  addRoom(tip:HTMLInputElement,cena:HTMLInputElement):boolean
  {
    this.rooms.push(new Rooms(tip.value,cena.valueAsNumber));
    tip.value='';
    cena.valueAsNumber=0;
    return false;
  }
}

