import React, { useState } from "react";
import { formatNumber } from "../../helper/helper";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../features/ProductsSlice";
import Cart from "../Cart";
import { SET_IS_OPEN } from "../../features/cartSlice";
function PetProductBox({ product }) {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.cartIsOpen);
  console.log(isOpen);
  const addToCart = () => {
    dispatch(ADD_TO_CART(product));
    dispatch(SET_IS_OPEN(true));
  };
  return (
    <div className='w-1/2 md:w-1/3  mt-2 md:mt-10 '>
      <div className='text-center h-full w-11/12  px-3 bg-white  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-[20px] py-5 mt-1'>
        <img src={product.images.main.url[0]} className='w-8/12 m-auto' />
        <p className='text-[0.85rem] font-Iran_Bold mt-3'>{product.title_fa}</p>

        <p className='mt-2 text-[1rem]'>
          {product.default_variant.price != undefined ||
            product.default_variant.length > 0
            ? formatNumber(product.default_variant.price.rrp_price / 10)
            : formatNumber(230000)}
          تومان
        </p>
        <button
          onClick={addToCart}
          className='w-10/12 m-auto mt-5 text-[16px] rounded-3xl bg-bg_btn py-1 px-4 border border-text_orange text-text_orange'>
          افزودن
        </button>
      </div>
      {isOpen && (
        <div
          className={`fixed transition-all duration-1000 ${isOpen
            ? "translate-x-0 opacity-100 "
            : "translate-x-full opacity-0 pointer-events-none"
            } overflow-y-auto top-0 right-0 w-80 h-full bg-white shadow-lg  `}>
          <Cart />
        </div>
      )}
    </div>
  );
}

export default PetProductBox;
