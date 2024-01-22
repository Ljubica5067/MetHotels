import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CrudRoomsModel } from '../crud-rooms/crud-rooms.model';
import { deleteReservation } from '../state/room.action';
import { selectSveRezervacije } from '../state/room.selectors';

@Component({
  selector: 'app-rezervacije',
  templateUrl: './rezervacije.component.html',
  styleUrls: ['./rezervacije.component.scss']
})
export class RezervacijeComponent {

  rezervacijeUnosi$: Observable<any>;

  constructor(private store: Store){
    this.rezervacijeUnosi$ = store.select(selectSveRezervacije);
  }

  izbrisiRezervaciju(room: CrudRoomsModel){
    this.store.dispatch(deleteReservation(room));
  }
}
