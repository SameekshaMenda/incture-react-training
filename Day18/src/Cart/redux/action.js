export const ADD_TO_CART = 'ADD_TO_CART';


// we hav created an action
export const addToCart  =  (product) => {
    return {
        type: ADD_TO_CART,
        payload: product  //optional data
    }
}