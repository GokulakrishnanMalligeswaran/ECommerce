import React from 'react'

const ProductDisplay = (props) => {
    const {product}=props;
  return (
    <div className="product_display_container">
            <div className="product_display_left">
                <div className="product_display_img_list">
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt=""/>

                </div>
            </div>
    </div>
  )
}

export default ProductDisplay