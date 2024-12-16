import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import Relatedproduct from '../Components/RelatedProducts/Relatedproduct';

 const Product = () => {
  const {all_product}= useContext(Shopcontext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id=== Number(productId));

  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Relatedproduct/>
    </div>
  )
}
export default Product;