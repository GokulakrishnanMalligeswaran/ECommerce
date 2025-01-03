import React from "react";
import newCollection from "../../public/Assets/new_collections.js";
import Product from "./Product.jsx";
import '../styles/NewCollection.css'

function NewCollection() {
  return (
    <div>
      <h2 className="new_collection_tag">New Collections</h2>
      <hr className="bottom_line" />
      <div className="new_collection_list">
            {newCollection.map((product, index) => {
                return (
                <Product
                    key={index}
                    image={product.image}
                    name={product.name}
                    old_price={product.old_price}
                    new_price={product.new_price}
                />
                );
            })}
      </div>
    </div>
  );
}

export default NewCollection;
