import { ADD_TO_CART, REMOVE_FROM_CART } from "./action"

const initiaState = {
    cart: []
}


const cartReducer = (state = initiaState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            {
                const existingItem = state.cart.find(item => item.id === action.payload.id);
                if (existingItem) {
                    return {
                        ...state,
                        cart: state.cart.map(item =>
                            item.id === action.payload.id
                                ? { ...item, qty: item.qty + 1 }
                                : item
                        )
                    };
                } else 
                    {
                    return {
                        ...state,
                        cart: [...state.cart, {...action.payload, qty: 1 }]
                    };
                }

            }

        case REMOVE_FROM_CART:
            {
                const removeItem = state.cart.find(item => item.id === action.payload);
                if (removeItem.qty > 1) {
                    return {
                        ...state,
                        cart: state.cart.map(item =>
                            item.id === action.payload
                                ? { ...item, qty: item.qty - 1 }
                                : item
                        )
                    };
                } else 
                    {
                    return {
                        ...state,
                        cart: state.cart.filter(item => item.id !== action.payload)
                    };
                }
            }

        default:
            return state;
    }
}
export default cartReducer;