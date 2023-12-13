import { Component } from '@angular/core';
import { RoomServiceService } from '../servis/room-service.service';


@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.scss']
})
export class DiComponent {

  constructor(private RoomService:RoomServiceService)
  {
    this.RoomService=RoomService;
  }
  ukupnaCena=this.RoomService.getPrice(6);
}
