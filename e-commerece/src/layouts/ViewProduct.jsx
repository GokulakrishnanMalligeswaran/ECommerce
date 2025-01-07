import React from 'react'
import { ShopContext } from '../constant/ShopContext'
import Breadcrum from './Breadcrum';
import ProductDisplay from './ProductDisplay';

const ViewProduct = () => {
    const {all_product} =useContext(ShopContext);
    const {productId}=useParams();
    const viewProduct = all_product.find((e)=>e.id===Number(productId))
  return (
    <div className='viewproduct_container'>
            <Breadcrum product={viewProduct}/>
            <ProductDisplay product={product}/>
    </div>
  )
}

export default ViewProduct