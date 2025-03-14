import React, { useEffect, useState } from "react";
import { getCatBinSoil, getCatBinSoilBrands } from "../../getData/GetDataCat";
import cat_food_container from "../../assets/images/cat_food_container.jpg.webp";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../Components/CatDryFood/Products";
function CatBinSoil() {
  const [BinSoil, setBinSoil] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchCatBinSoil"],
    queryFn: getCatBinSoil,
    onError: (error) => {
      console.log("error", error);
    },
  });
  const {
    data: dataBrands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useQuery({
    queryKey: ["fetchBrandsCatBinSoil"],
    queryFn: () => getCatBinSoilBrands(),
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
      setBinSoil(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <div className='flex flex-col md:flex-row text-center md:text-right gap-8 mt-10 bg-white rounded-[30px] p-5'>
          <img
            src={cat_food_container}
            alt='cat-image'
            className='w-3/4 h-3/4 m-auto'
          />
          <div>
            <h3 className='text-clamp_intro font-Iran_Bold '>ظرف خاک گربه </h3>
            <p className='mt-5 text-justify'>
              ظرف خاک، محلی برای دستشویی گربه است که با خاک مخصوص گربه پر
              می‌شود. هنگام خرید ظرف خاک گربه به اندازه و جثه گربه خود دقت کنید
              تا هنگام دستشویی کردن در آن راحت باشد. جنس توالت گربه باید محکم
              باشد و به راحتی بتوان آن را شستشو داد. انواع ظرف خاک گربه موجود در
              بازار شامل: سقف دار یا بدون سقف است که در ادامه می‌توانید با قیمت
              ارزان به صورت اینترنتی خریداری کنید. ظرف خاک مسقف معمولا گران‌تر
              است اما به دلیل مزایای آن، پرطرفدارتر است. اکثر توالت‌های مسقف
              فیلتر دارند که بوی ادرار و مدفوع را کامل از بین می‌برند.​​​​​​​{" "}
            </p>
          </div>
        </div>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات گربه/</Link>
          <Link>لوازم نگهداری گربه</Link>
          <p>/ظرف خاک گربه</p>
        </div>
        <Products brands={brands} products={BinSoil} />
      </div>
    </div>
  );
}

export default CatBinSoil;
