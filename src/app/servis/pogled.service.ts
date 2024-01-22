import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rooms } from '../rooms/rooms.model';
import { CrudRoomsModel } from '../crud-rooms/crud-rooms.model';

@Injectable({
  providedIn: 'root'
})
export class PogledService {

  private url="http://localhost:3000/rooms"
  constructor(private httpClient:HttpClient) 
  {

  }

  getRooms():Observable<CrudRoomsModel[]>
  {
    return this.httpClient.get<CrudRoomsModel[]>(this.url)
  }

  
}
