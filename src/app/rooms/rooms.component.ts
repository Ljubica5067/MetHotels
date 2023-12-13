import { Component } from '@angular/core';
import { Rooms } from './rooms.model';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { filter } from 'rxjs';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  klima: boolean = false;
  minibar: boolean = false;
  sauna: boolean = false;
  pranjeVesa: boolean = false;
  racun: number = 0; 
  rooms:Rooms[];
  constructor()
  {
    this.rooms=[new Rooms("jednokrevetna","Korisnik1",5),new Rooms("dvokrevetna","Korisnik2",4),new Rooms("trokrevetna","Korisnik3",10)];
  }
  
  addRoom(tipSobe:HTMLSelectElement,korisnik:HTMLInputElement,brNoci:HTMLInputElement):boolean
  {
    this.rooms.push(new Rooms(tipSobe.value,korisnik.value,brNoci.valueAsNumber));
    tipSobe.value='';
    korisnik.value='';
    return false;
  }
  myForm=new FormGroup({
    tip: new FormControl("", Validators.required),
    korisnik: new FormControl("",Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]+$/)])),
    brNoci: new FormControl("",Validators.required)
  })

  onInputChange(value: string) {
    if (value.length < 6) {
      console.log('duzina inputa je manja od 6 karaktera');
    }
  }

  onCheckboxChange() {
    this.racun = 0;
    if (this.klima) {
      this.racun += 3000;
    }
    if (this.minibar) {
      this.racun += 7000;
    }
    if (this.sauna) {
      this.racun += 15000;
    }
    if (this.pranjeVesa) {
      this.racun += 1500;
    }
    
    this.showAlert(`Vaš račun je uvećan za ${this.racun} dinara`);
  }

  showAlert(message: string) {
    
    let alert = document.createElement('div');
    alert.className = 'alert alert-dismissible fade show';
    alert.style.cssText="background: #9E93E6;border: 1px solid #413782;"
    alert.innerHTML = `<button type="button" data-dismiss="alert">&times;</button>&nbsp&nbsp&nbsp${message}`;
    document.getElementById('alert')!.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 2000);
  }
}

