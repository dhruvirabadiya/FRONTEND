import { ADD_TO_CART } from "./Constant";

export const ADDtoCart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let CartItems = state.find((item) => item.id == action.payload.id)
            console.log('CartItems:', CartItems);
            return [action.payload.id]
        default: return state
    }
}