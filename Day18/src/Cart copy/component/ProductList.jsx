import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/action';


const products = [
    {id : 100, name: "IPhone16", price: 140000},
    {id : 200, name: "Samsung", price: 240000},
    {id : 300, name: "OPPO", price: 19000},
    {id : 400, name: "Lenova", price: 14000},
    {id : 500, name: "VIVO", price: 12000},

]


function ProductList() {

    const dispatch = useDispatch();
  return (
    <div>
      <h2>Products :</h2>
      {products.map(product => (
          <div key = {product.id} style={{marginBottom: '10px'}}>
            <span>{product.name} :: {product.price}</span>
            <button style={{marginBottom: '10px'}} onClick={() =>  dispatch(addToCart(product))}>Add to Cart</button>
          </div>
      ))}
    </div>
  )
}

export default ProductList
