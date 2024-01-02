import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // URL vašeg REST servisa
private url = 'http://localhost:3000/rooms';

// Dohvatanje svih soba
getRooms() {
    return this.http.get(this.url);
}

// Dohvatanje jedne sobe
getRoom(id: number) {
    return this.http.get(this.url+'/'+id);
}

// Kreiranje nove sobe
createRoom(room: any) {
    return this.http.post(this.url, room).pipe(map((res: any) => {
        return res;
      }));
}

// Ažuriranje postojeće sobe
updateRoom(id: number, room: any) {
    return this.http.put(this.url+'/'+id, room);
}

// Brisanje sobe
deleteRoom(id: number) {
    return this.http.delete(this.url+'/'+id);
}

}
