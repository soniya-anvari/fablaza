import React, { useEffect, useState } from "react";
import { getCatWetBrands, getCatWetFoods } from "../getData/GetDataCat";
import banner from "../assets/images/wetFoodCat.jpg.webp";
import cat_wet_image from "../assets/images/cat_description_wet_food_k.jpg.webp";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../Components/CatDryFood/Products";
function CatWetFoodPouch() {
  const [catWetFoodsPouch, setCatWetFoodsPouch] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchCatWetFoods"],
    queryFn: getCatWetFoods,
    onError: (error) => {
      console.log("error", error);
    },
  });
  const {
    data: dataBrands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useQuery({
    queryKey: ["fetchBrandsWetFood"],
    queryFn: () => getCatWetBrands(),
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
      setCatWetFoodsPouch(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <img src={banner} alt='banner' className='rounded-[30px]' />
        <div className='flex flex-col md:flex-row text-center md:text-right gap-8 mt-10 bg-white rounded-[30px] p-5'>
          <img
            src={cat_wet_image}
            alt='cat-image'
            className='w-3/4 h-3/4 m-auto'
          />
          <div>
            <h3 className='text-clamp_intro font-Iran_Bold '>غذای تر گربه</h3>
            <p className='mt-5 text-justify'>
              غذای تر یا مرطوب گربه در چند نوع پوچ، کنسروی، خوراک و سوپ وجود
              دارد. از مزایای غذای مرطوب می‌توان به تآمین آب بدن گربه و درمان
              بیماری‌های ادراری و کلیوی اشاره کرد. از انواع برندهای غذای مرطوب
              گربه می‌توان به وینستون، فیلکس، شایر، رویال کنین اشاره کرد که هر
              کدام قیمت متفاوتی دارند.قیمت غذای مرطوب نسبت به غذای خشک گربه
              بالاتر است اما کالری کمتری دارد.علاوه براین باید حتما در یخچال از
              آن نگهداری کرد. جویدن و هضم کردن غذای مرطوب نسبت به غذای خشک برای
              گربه راحت‌تر است؛ به همین خاطر از آن بیشتر استقبال می‌کنند. هنگام
              خرید غذای مرطوب گربه حتما به کیفیت و فرمولاسیون آن توجه کنید.{" "}
            </p>
          </div>
        </div>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات گربه/</Link>
          <Link>غذای گربه</Link>
          <p>/غذای تر گربه</p>
        </div>
        <Products brands={brands} products={catWetFoodsPouch} />
      </div>
    </div>
  );
}

export default CatWetFoodPouch;
