import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudRoomsModel } from './crud-rooms.model';
import { DataService } from '../servis/data.service';
import { Store } from '@ngrx/store';
import { addReservation } from '../state/room.action';

@Component({
  selector: 'app-crud-rooms',
  templateUrl: './crud-rooms.component.html',
  styleUrls: ['./crud-rooms.component.scss']
})
export class CrudRoomsComponent {

    formValue!:FormGroup;
    roomModelObj:CrudRoomsModel=new CrudRoomsModel();
    roomsData!:any;
    showAdd!:boolean;
    showUpdate!:boolean;

    constructor(private FormBuilder:FormBuilder,private servis:DataService,private store:Store)
    {}

    ngOnInit():void
    {
      this.formValue=this.FormBuilder.group(
        {
          id:[''],
          tipSobe:[''],
          korisnik:[''],
          brNoci:[''],
        })
        this.getAllRooms();
    }

    getAllRooms() {
      this.servis.getRooms().subscribe(res=>{this.roomsData=res})
    }

    clickDodavanje()
    {
      this.formValue.reset();
      this.showAdd=true;
      this.showUpdate=false;
    }

    postRoomDetalje()
    {
      this.roomModelObj.tipSobe=this.formValue.value.tipSobe;
      this.roomModelObj.brNoci=this.formValue.value.brNoci;
      this.roomModelObj.korisnik=this.formValue.value.korisnik;

      this.servis.createRoom(this.roomModelObj).subscribe(res=>
        {
          console.log(res);
          alert("Soba dodata uspesno!");
          let ref=document.getElementById("cancel");
          ref?.click();
          this.formValue.reset();
          this.getAllRooms();
        },
        err=>
        {
          alert("Ufff! It went oops!");
        })
    }

    deleteRoom(row:any)
    {
      this.servis.deleteRoom(row.id).subscribe(res=>
        {
          alert("Soba obrisana");
          this.getAllRooms();
        })
    }

    edit(row:any)
    {
      this.roomModelObj.id=row.id;
      this.formValue.controls['tipSobe'].setValue(row.tipSobe);
      this.formValue.controls['brNoci'].setValue(row.brNoci);
      this.formValue.controls['korisnik'].setValue(row.korisnik);

      this.showAdd=false;
      this.showUpdate=true;
    }

    updateDetalje()
    {
      this.roomModelObj.tipSobe=this.formValue.value.tipSobe;
      this.roomModelObj.brNoci=this.formValue.value.brNoci;
      this.roomModelObj.korisnik=this.formValue.value.korisnik;

      this.servis.updateRoom(this.roomModelObj.id,this.roomModelObj).subscribe(res=>
        {
          alert("Apdejtovano suksesfuli!");
          let ref=document.getElementById('cancel');
          ref?.click();
          this.formValue.reset();
          this.getAllRooms();
        });
    }

    rezervisiSobu(room: CrudRoomsModel){
      alert("Rezervisano!");
      this.store.dispatch(addReservation(room));
    }

    



    
}
