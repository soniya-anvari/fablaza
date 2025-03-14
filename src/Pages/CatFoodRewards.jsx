import React, { useEffect, useState } from "react";
import { getCatRewardFoods, getCatRewardBrands } from "../getData/GetDataCat";
import banner from "../assets/images/cat_food_reward_banner.jpg.webp";
import cat_reward_image from "../assets/images/cat_reward_food_description.jpg.webp";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../Components/CatDryFood/Products";
function CatFoodRewards() {
  const [catRewardFoods, setCatRewardFoods] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchCatRewardFoods"],
    queryFn: getCatRewardFoods,
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
    queryFn: () => getCatRewardBrands(),
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
      setCatRewardFoods(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <img src={banner} alt='banner' className='rounded-[30px]' />
        <div className='flex flex-col md:flex-row text-center md:text-right gap-8 mt-10 bg-white rounded-[30px] p-5'>
          <img
            src={cat_reward_image}
            alt='cat-image'
            className='w-3/4 h-3/4 m-auto'
          />
          <div>
            <h3 className='text-clamp_intro font-Iran_Bold '>تشویقی گربه</h3>
            <p className='mt-5 text-justify'>
              غذای تشویقی گربه برای یادگیری، آموزش و ایجاد رابطه خوب با گربه نقش
              زیادی دارد. از غذای تشویقی در کنار غذای اصلی بیشتر برای میان‌وعده
              و تشویق کردن گربه هنگام انجام رفتار مثبت استفاده می‌شود. از
              برندهای مختلف غذای تشویقی گربه می‌توان به وینستون، ویسکاس، نوتری
              اشاره کرد. تشویقی یا اسنک گربه معمولا دارای طعم و مزه خوبی است و
              گربه‌ها به آن علاقه زیادی دارند. از آن‌جایی که غذای تشویقی گربه،
              کالری بالایی دارد، مصرف بیش از حد آن برای گربه مضر است. برای
              این‌که پس از مصرف غذای تشویقی، گربه دچار مشکلات گوارشی یا اضافه
              وزن نشود حتما به دریافتی کالری روزانه گربه توجه کنید. تشویقی‌‌های
              گربه بسته به مواد اولیه، روش تهیه و بسته‌بندی، قیمت‌های مختلفی
              دارد که شما می‌توانید ارزان‌ترین آن را تهیه کنید. ​​​​​​​
            </p>
          </div>
        </div>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات گربه/</Link>
          <Link>غذای گربه</Link>
          <p>/تشویقی گربه</p>
        </div>
        <Products brands={brands} products={catRewardFoods} />
      </div>
    </div>
  );
}

export default CatFoodRewards;
