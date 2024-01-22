import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CrudRoomsModel } from "../crud-rooms/crud-rooms.model";

export const selectSveRezervacije = createSelector(
    createFeatureSelector('rezervacijeUnosi'), (state: CrudRoomsModel[]) => {
        return state;
    }
);

export const selectBrojRezervacija = createSelector(
    createFeatureSelector('rezervacijeUnosi'), (state: CrudRoomsModel[]) => {
        return state.length;
    }
);