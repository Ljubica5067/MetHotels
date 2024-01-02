import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PreporukaComponent } from './preporuka/preporuka.component';
import { OnamaComponent } from './onama/onama.component';
import { CrudRoomsComponent } from './crud-rooms/crud-rooms.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes =
  [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'ponuda', component: PonudaComponent },
    { path: 'preporuka', component: PreporukaComponent },
    { path: 'onama', component: OnamaComponent },
    { path: 'crud', component: CrudRoomsComponent },
    { path: 'rooms', component: RoomsComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
