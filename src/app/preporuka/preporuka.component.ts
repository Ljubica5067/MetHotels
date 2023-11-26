import { Component } from '@angular/core';
import { Rooms } from '../rooms/rooms.model';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.scss']
})
export class PreporukaComponent {
  room=new Rooms("dvokrevetna",12000);
}
