import { createReducer, on, ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { CrudRoomsModel } from "../crud-rooms/crud-rooms.model";
import { addReservation, deleteReservation } from "./room.action";

export const rezervacije: CrudRoomsModel[] = [];

export const roomReducer = createReducer(rezervacije, on(addReservation, (rez, unos) => {
    const rezervacijeKopija: CrudRoomsModel[] = JSON.parse(JSON.stringify(rez));
    rezervacijeKopija.push(unos);
    return rezervacijeKopija;
}), on(deleteReservation, (rez, unos) => {
    const rezervacijeKopija: CrudRoomsModel[] = JSON.parse(JSON.stringify(rez));
    const found = rezervacijeKopija.find(u => u.id == unos.id);
    if(found){
        rezervacijeKopija.splice(rezervacijeKopija.indexOf(found), 1);
    }

    return rezervacijeKopija;
})

);

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        if(action.type === INIT || action.type == UPDATE){
            const storageValue = localStorage.getItem("state");
            if(storageValue){
                try{
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem("state");
                }
            }
        }

        const nextState = reducer(state, action);
        localStorage.setItem("state", JSON.stringify(nextState));
        return nextState;
    };
}