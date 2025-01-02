import React from "react";
import data_product from "../../public/Assets/data";
import Product from "./Product.jsx";
import "../styles/Popular.css"

function Popular() {
  return (
    <div className="product_container">
        <h2 className="popular_tag">Popular In Women</h2>
      <div className="list_of_popular_in_women">
        {data_product.map((product, index) => {
          return (
            <Product
              key={index}
              name={product.name}
              image={product.image}
              old_price={product.old_price}
              new_price={product.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
