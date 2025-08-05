import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/action';





function Cart() {
  const cartItems = useSelector(state => state.cartReducer.cart);
  const dispatch = useDispatch();

   const total = cartItems.reduce((total, item) => total + (item.price * item.qty), 0);

  return (
    <div>
      <h2> Cart Page :</h2>
      {cartItems.map((item, index) => {
        console.log(item);
        
        return (
          <div key={index}>
            <li>
              {item.name} :: ${item.price * item.qty}  - {item.qty} quantity
            </li>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        );
      })}
      <h3>Total : ${total}</h3>
    </div>
  )
}

export default Cart
