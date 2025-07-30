import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Product() {

    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');
    const price = searchParams.get('price');

  return (
    <div>
        <h2>Product Page</h2>
        <p><strong>Category : {category} </strong></p>
        <p><strong>Price : {price} </strong></p>
        <hr></hr>
        <button onClick={() => setSearchParams({category : "Iphone", price : "120000"})}>Iphone</button>
        <button onClick= {() => setSearchParams({category: "HP laptop", price: "679999"})}> hp laptop</button>
    </div>
  )
}

export default Product