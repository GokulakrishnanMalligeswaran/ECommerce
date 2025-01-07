import React,{useContext} from "react";
import "../styles/ShopCategory.css";
import dropdown_icon from "../../public/Assets/dropdown_icon.png";
import Product from "../layouts/Product";
import { ShopContext } from "../constant/ShopContext";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop_category">
      <img className="shopcategory_banner" src={props.banner} alt="" />
      <div className="shopcategory_sort_container">
      <div className="shopcategory_indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
      </div>
      <div className="shopCategory_sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
        
        <div className="shopcategory_products">
          {all_product.map((product, index) => {
            if (props.category === product.category) {
              return (
                <Product
                  key={index}
                  image={product.image}
                  name={product.name}
                  old_price={product.old_price}
                  new_price={product.new_price}
                />
              )
            }
            else{
                return null
              }
          })}
        </div>
      <div className="shopcategory_loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
