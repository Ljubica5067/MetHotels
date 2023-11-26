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
const routes:Routes=
[
  { path: 'ponuda', component: PonudaComponent },
  { path: 'preporuka', component: PreporukaComponent },
  { path: 'onama', component: OnamaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    NavbarComponent,
    PonudaComponent,
    PreporukaComponent,
    OnamaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
