
import cat_image from "../assets/images/cat_dry_image.jpg.webp";
import Products from "../Components/CatDryFood/Products";
import { useQuery } from "@tanstack/react-query";

import { getCatDryBrands, getCatDryFoods } from "../getData/GetDataCat";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function CatDryFood() {
  const [catDryFoods, setCatDryFoods] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchCatDryFood"],
    queryFn: getCatDryFoods,
    onError: (error) => {
      console.log("error", error);
    },
  });
  const {
    data: dataBrands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useQuery({
    queryKey: ["fetchBrandsDryFood"],
    queryFn: () => getCatDryBrands(),
    onError: (error) => {
      console.log("error", error);
    },
  });
  useEffect(() => {
    if (dataBrands) {
      setBrands(dataBrands);
      console.log(dataBrands);
    }
  }, [dataBrands]);
  useEffect(() => {
    if (dataProduct) {
      setCatDryFoods(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <img src={banner} alt='banner' className='rounded-[30px]' />
        <div className='flex flex-col md:flex-row text-center md:text-right gap-8 mt-10 bg-white rounded-[30px] p-5'>
          <img src={cat_image} alt='cat-image' className='w-3/4 h-3/4 m-auto' />
          <div>
            <h3 className='text-clamp_intro font-Iran_Bold '>غذای خشک گربه</h3>
            <p className='mt-5 text-justify'>
              غذای خشک گربه مزایای بسیار فراوانی دارد به همین دلیل صاحبان گربه
              ها از آن استقبال می کنند، تغذیه یکی از مهمترین اصل های نگهداری از
              گربه است، به همین دلیل باید با درنظر گرفتن سن، نژاد، بیماری ها،
              حساسیت ها و سبک زندگی گربه بهترین غذای خشک را انتخاب نمایید.از
              مزایای غذای خشک گربه می توان به ماندگاری بالا، میزان کالری مناسب،
              میزان پروتئین بالا، کربوهیدرات بالا و قیمت مناسب اشاره کرد.​​​​​​​
            </p>
          </div>
        </div>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات گربه/</Link>
          <Link>غذای گربه</Link>
          <p>/غذای خشک گربه</p>
        </div>
        <Products brands={brands} products={catDryFoods} />
      </div>
    </div>
  );
}

export default CatDryFood;
