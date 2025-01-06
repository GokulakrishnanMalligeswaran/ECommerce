import React from 'react'
import unrated from '../../public/Assets/star_icon.png'
import rated from '../../public/Assets/star_dull_icon.png'
export const ProductDetails = (props) => {
  return (
    <div className='product_details_container'>
        <div className="product_left_details">
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
            <img src={props.image} alt="" />
        </div>
        <div className="product_right_details">
            <h1>{props.name}</h1>
            <div className="rating">
                <img src={rated} alt="" />
                <img src={rated} alt="" />
                <img src={rated} alt="" />
                <img src={rated} alt="" />
                <img src={unrated} alt="" />
            </div>
            <span>{props.old_price}&nbsp;&nbsp;&nbsp;<p className='old_price'>{props.old_price}</p></span>
        </div>

    </div>
  )
}