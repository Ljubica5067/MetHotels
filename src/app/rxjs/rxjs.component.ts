import { Component } from '@angular/core';
import { CrudRoomsModel } from '../crud-rooms/crud-rooms.model';
import { PogledService } from '../servis/pogled.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent {
  rooms:CrudRoomsModel[];

  constructor(private servis:PogledService)
  {

  }

  ngOnInit():void
  {
    this.getRooms()
  }

  getRooms():void
  {
    this.servis.getRooms().subscribe(rooms=>this.rooms=rooms);
  }

  
}
