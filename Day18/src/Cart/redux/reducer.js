import {ADD_TO_CART} from "./action"
const initiaState = {
    cart : []
}


const cartReducer = (state = initiaState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };

        default:
            return state;    
    }
}
export default cartReducer;