import { INCREMENT, DECREMENT, RESET } from "./Constant";

// export const increment = (item) => {
//     return {
//         type: INCREMENT,
//         payload: item
//     }
// }

// export const decrement = (item) => {
//     return {
//         type: DECREMENT,
//         payload: item
//     }
// }

// export const reset = () => {
//     return {
//         type: RESET
//     }
// }


export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT,
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}