export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = ' REMOVE_FROM_CART';

// we hav created an action
export const addToCart  =  (product) => {
    return {
        type: ADD_TO_CART,
        payload: product  //optional data
    }
}

export const removeFromCart = (index) => {
    return {
        type: REMOVE_FROM_CART,
        payload: index
    }
}