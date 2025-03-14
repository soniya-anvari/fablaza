import React from "react";
import ProductBox from "./ProductBox";
import { discount_products } from "../../constant/Product";

function DiscountProducts() {
  return (
    <div className=' md:flex  md:w-10/12 m-auto mt-7 gap-10'>
      {discount_products.map((product) => (
        <div
          key={product.id}
          className='w-11/12 mt-5 flex flex-wrap  bg-no-repeat bg-cover m-auto  lg:w-1/3'>
          <ProductBox product={product} discount={true} />
        </div>
      ))}
    </div>
  );
}

export default DiscountProducts;
