import React from 'react'
import "../styles/Product.css"
function Product(props) {
  return (
    <div className='product'>
            <img src={props.image} alt="" />
            <p className="product_name">{props.name}</p>
            <span className="new_price">$ {props.new_price} &nbsp;&nbsp;&nbsp; <span className="old_price">{props.old_price}</span></span>
           
    </div>
  )
}

export default Product