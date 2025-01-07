import React from 'react'
import "../styles/Product.css"
import { Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'
function Product(props) {
  return (
    <div className='product' onClick={ProductDetails}>
            <Link to={`product/${props.id} `}>
                <img src={props.image} alt="" className="image"/>
            </Link> 
            <p className="product_name">{props.name}</p>
            <span className="new_price">$ {props.new_price} &nbsp;&nbsp;&nbsp; <span className="old_price">{props.old_price}</span></span>
           
    </div>
  )
}

export default Product