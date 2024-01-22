import { createAction, props } from "@ngrx/store";
import { CrudRoomsModel } from "../crud-rooms/crud-rooms.model";

export const addReservation = createAction('Dodaj rezervaciju', props<CrudRoomsModel>());
export const deleteReservation = createAction('Izbrisi rezervaciju', props<CrudRoomsModel>());