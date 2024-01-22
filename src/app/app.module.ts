import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { OnamaComponent } from './onama/onama.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DiComponent } from './di/di.component';
import { RoomServiceService } from './servis/room-service.service';
import { Rooms } from './rooms/rooms.model';
import { CrudRoomsComponent } from './crud-rooms/crud-rooms.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    NavbarComponent,
    PonudaComponent,
    PreporukaComponent,
    OnamaComponent,
    DiComponent,
    CrudRoomsComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RoomServiceService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
