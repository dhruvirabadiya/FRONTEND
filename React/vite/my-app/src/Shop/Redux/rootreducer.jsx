import { Reducer1, Reducer2 } from "./Reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    reducer1: Reducer1,
    reducer2: Reducer2
})