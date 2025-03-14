import React from "react";

function ProductBox({ product, discount }) {
  return (
    <div
      className='h-[240px] md:h-[200px] w-full bg-no-repeat  bg-cover bg-center md:bg-auto   flex flex-col justify-between rounded-3xl px-10 py-7  md:px-5  '
      style={{
        backgroundImage: `url(${product.backGround})`,
        backgroundSize: "cover",
      }}>
      {discount && (
        <div
          className={`text-center text-white px-3 py-2 m-auto w-fit rounded-[50%] `}
          style={{ backgroundColor: `${product.color}` }}>
          <p className='text-[15px]'>{product.discount}</p>

          <p className='text-[12px]'>تخفیف</p>
        </div>
      )}
      <h3
        className='w-1/2  font-Iran_Bold text-[1.2rem] md:text-[0.9rem] lg:text-[1.2rem] '
        style={{ color: `${product.color}` }}>
        {product.title}
      </h3>
      <button
        style={{
          color: `${product.color} `,
          border: `3px solid ${product.color}`,
        }}
        className='px-5 mt-4 lg:px-9  rounded-[20px] py-1 w-fit  '>
        خرید
      </button>
    </div>
  );
}

export default ProductBox;
