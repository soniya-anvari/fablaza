import React from "react"

import { off_price, shorten_text } from "../../helper/helper";
import { ADD_TO_CART } from "../../features/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import { SET_IS_OPEN } from "../../features/cartSlice";
import { Link } from "react-router-dom";
const ProductsCard = ({ product }) => {

    const dispatch = useDispatch();
    const { isOpen } = useSelector((state) => state.cartIsOpen);
    console.log(isOpen);
    const addToCart = () => {
        dispatch(ADD_TO_CART(product));
        dispatch(SET_IS_OPEN(true));
    };
    return (
        <>
            <Link to="/shop/1"
                className='block relative bg-white text-center  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[1px] border-[#00000021] rounded-[20px] py-3 mt-1 max-w-[400px] h-[320px] '>
                <img src={product.images.main.url[0]} className='w-8/12 m-auto' />
                <p className='text-[0.85rem] font-Iran_Bold mt-3 h-[20px]' >
                    {shorten_text(product.title_fa)}...
                </p>
                <div className="flex items-center justify-center h-16">
                <del className='text-[0.8rem] mt-0 text-text_muted'>
                    {product.default_variant.price.rrp_price / 10}تومان
                </del>
                <p className='text-red_text_color text-[1rem]'>
                    {off_price(product.default_variant.price.rrp_price / 10)} تومان
                </p>
                </div>
                <span className="text-[15px]  absolute top-3 right-2 bg-[#bebebe81] py-1 px-2 rounded-xl text-purple_d"> موجود در انبار ایران </span>
                <button className='flex items-center justify-center w-11/12 m-auto  text-[16px] rounded-xl bg-purple_l py-1 px-4 border border-purple_d  gap-2  mt-3  absolute bottom-3 left-2 right-2 text-white' onClick={addToCart}>
                    <span>
                        <svg width="25" height="22" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.25 15.25C20.25 18.1496 17.8996 20.5 15 20.5C12.1004 20.5 9.75 18.1496 9.75 15.25" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M29 8.25H1V18.75C1 29.8919 2.97395 31.875 15 31.875C27.026 31.875 29 29.8919 29 18.75V8.25Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 8.25L3.53262 3.18475C4.1255 1.999 5.33741 1.25 6.66312 1.25H23.3368C24.6626 1.25 25.8745 1.999 26.4674 3.18475L29 8.25" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    <span>
                              افزودن به سبد خرید 
                    </span>
                </button>
            </Link>
        </>
    )
}


export default ProductsCard