import React from 'react'
import { useSelector } from 'react-redux'


function Cart() {
  const cartItems = useSelector(state => state.cart);

  return (
    <div>
      <h2> Cart Page :</h2>
      {cartItems.length === 0  && <p>Cart is Empty</p>}
      <ul>
        {cartItems.map((item, index) => (
            <li key={index}> {item.name} :: ${item.price}</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
