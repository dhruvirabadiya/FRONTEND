import { ADDtoCart } from "./Reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    addtocart: ADDtoCart
})