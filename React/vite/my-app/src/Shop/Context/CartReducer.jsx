
const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': const exist = state.find(item => item.id === action.payload.id)
            console.log('Payload:', action.payload);

            if (exist) {
                return state
            }
            return [...state, action.payload]
        case 'REMOVE_FROM_CART': return state.filter(item => item.id !== action.payload.id)

        default: return state
    }
}
export default CartReducer