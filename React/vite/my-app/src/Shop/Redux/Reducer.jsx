import { INCREMENT, DECREMENT, RESET } from "./Constant";

// const initialValue1 = 20
// const initialValue2 = { cake: 20 }
// const initialValue3 = { cake: 20, choco: 50 }
// const initialValue4 = [{ cake: 20, choco: 50 }]
// const initialValue5 = [{ cake: 20 }, { choco: 50 }]

// const Reducer = (state = initialValue1, action) => {
//     switch (action.type) {
//         case INCREMENT: return state + 1
//         case DECREMENT:
//             if (state <= 0) {
//                 return state
//             }
//             return state - 1
//         case RESET: return initialValue1
//         default: return state
//     }
// }

// const Reducer = (state = initialValue2, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return { ...state, cake: state.cake + 1 };
//         case DECREMENT:
//             return { ...state, cake: state.cake > 0 ? state.cake - 1 : 0 };
//         case RESET: return initialValue2
//         default: return state
//     }
// }

// export default Reducer

// const Reducer = (state = initialValue3, action) => {


//     switch (action.type) {
//         case INCREMENT:
//             return { ...state, [action.payload]: state[action.payload] + 1 };

//         case DECREMENT:
//             return { ...state, [action.payload]: state[action.payload] > 0 ? state[action.payload] - 1 : 0 };
//         case RESET: return initialValue3
//         default: return state
//     }
// }

// export default Reducer

// const Reducer = (state = initialValue4, action) => {

//     switch (action.type) {
//         case INCREMENT:
//             return state.map(item => ({
//                 ...item, [action.payload]: item[action.payload] + 1
//             }))

//         case DECREMENT:
//             return state.map(item => ({
//                 ...item, [action.payload]: item[action.payload] > 0 ? item[action.payload] - 1 : 0
//             }));
//         case RESET: return initialValue4
//         default: return state
//     }
// }

// export default Reducer

// const Reducer = (state = initialValue5, action) => {

//     switch (action.type) {
//         case INCREMENT:
//             return state.map(item =>
//                 item.cake !== undefined ? { cake: item.cake + (action.payload === "cake" ? 1 : 0) } : { choco: item.choco + (action.payload === "choco" ? 1 : 0) }
//             )

//         case DECREMENT:
//             return state.map(item =>
//                 item.cake !== undefined
//                     ? { cake: item.cake - (action.payload === "cake" && item.cake > 0 ? 1 : 0) }
//                     : { choco: item.choco - (action.payload === "choco" && item.choco > 0 ? 1 : 0) }
//             );
//         case RESET: return initialValue5
//         default: return state
//     }
// }

// export default Reducer

/*--------Multiple Reducer------------ */
const initialValue1 = 20
const initialValue2 = 50

export const Reducer1 = (state = initialValue1, action) => {
    switch (action.type) {
        case INCREMENT: return state + 1
        case DECREMENT:
            if (state <= 0) {
                return state
            }
            return state - 1
        case RESET: return initialValue1
        default: return state
    }
}

export const Reducer2 = (state = initialValue2, action) => {
    switch (action.type) {
        case INCREMENT: return state + 1
        case DECREMENT:
            if (state <= 0) {
                return state
            }
            return state - 1
        case RESET: return initialValue2
        default: return state
    }
}

