import { useDispatch, useSelector } from "react-redux";
import { formatNumber, shorten_text } from "../helper/helper";
import { DECREASE, INCREASE, REMOVE_ITEM } from "../features/ProductsSlice";
import { useState } from "react";
import { SET_IS_OPEN } from "../features/cartSlice";
function Cart() {
  const [code, setCode] = useState("");
  const [isCode, setIsCode] = useState(false);
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch(); 
  const clickHandler = () => {
    if (code == "code") setIsCode(true);
  };
  return (
    <div>
      <div className='flex justify-between py-5 px-3 bg-text_orange text-white z-50 '>
        <h4 className=' m-auto'>سبد خرید</h4>
        <svg
          onClick={() => dispatch(SET_IS_OPEN(false))}
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          fill='currentColor'
          className='bi bi-x-lg cursor-pointer'
          viewBox='0 0 16 16'>
          <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z' />
        </svg>
      </div>
      <div>
        {products.products.length == 0 ? (
          <p className='mt-10 px-5'>سبد خرید شما خالی است.</p>
        ) : (
          products.products?.map((product) => (
            <div className='flex gap-2 mt-10 items-center px-5'>
              <img
                className='w-1/4 h-1/4 '
                src={product.images.main.url[0]}
                alt={product.title_fa}
              />
              <div>
                <p className='text-[13px] text-text_gray_color'>
                  {shorten_text(product.title_fa)}...
                </p>

                <div className='flex gap-5 mt-5 items-center'>
                  <p>تعداد:</p>
                  <div className='flex gap-4 border-[1px] border-solid p-[4px] px-2 border-[#ccc] rounded-md'>
                    <button onClick={() => dispatch(INCREASE(product))}>
                      +
                    </button>
                    <p>{product.quantity}</p>

                    <button
                      disabled={product.quantity <= 1}
                      onClick={() => dispatch(DECREASE(product))}>
                      -
                    </button>
                  </div>
                  <svg
                    onClick={() => dispatch(REMOVE_ITEM(product))}
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='bi bi-trash cursor-pointer text-red_text_color'
                    viewBox='0 0 16 16'>
                    <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z' />
                    <path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z' />
                  </svg>
                </div>
                <p className='text-[15px]'>
                  {formatNumber(product.default_variant.price.rrp_price / 10)}
                </p>
              </div>
              <hr className='text-text_gray_color h-[2px]' />
            </div>
          ))
        )}
      </div>
      {products.products.length > 0 && (
        <div className='shadow-md border-t border-text_gray_color px-5  mt-10 py-10'>
          <div className='flex items-center gap-4'>
            <p className='text-[10px] text-text_gray_color'>
              ایا کد تخفیف دارید؟
            </p>
            <input
              className='border border-1 w-[100px] rounded-sm border-[#ccc]'
              type='text'
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              onClick={clickHandler}
              className='text-white text-[13px] py-[2px] px-2 rounded-md bg-blue_color'>
              اعمال
            </button>
          </div>
          <div className='flex text-[14px] mt-5  justify-between items-center'>
            <p>جمع کل</p>
            <p>
              {isCode
                ? `${formatNumber(
                    products.totalCost - (products.totalCost * 10) / 100
                  )} تومان`
                : `${formatNumber(products.totalCost)}تومان`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
