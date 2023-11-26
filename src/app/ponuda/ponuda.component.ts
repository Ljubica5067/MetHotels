import { Component } from '@angular/core';
import { RoomsComponent } from '../rooms/rooms.component';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.scss']
})
export class PonudaComponent {
  appComponent:RoomsComponent=new RoomsComponent;
  room=this.appComponent.rooms;
}
