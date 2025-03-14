import React, { useEffect, useState } from "react";
import {
  getCatFoodContainer,
  getCatwaterFoodContainerBrands,
} from "../../getData/GetDataCat";
import cat_food_container from "../../assets/images/cat_food_container.jpg.webp";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../Components/CatDryFood/Products";
function WaterAndFoodContianer() {
  const [waterAndFoodContainer, setWaterAndFoodContainer] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchCatRewardFoods"],
    queryFn: getCatFoodContainer,
    onError: (error) => {
      console.log("error", error);
    },
  });
  const {
    data: dataBrands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useQuery({
    queryKey: ["fetchBrandsFoodWaterContainerCat"],
    queryFn: () => getCatwaterFoodContainerBrands(),
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
      setWaterAndFoodContainer(dataProduct);
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
            <h3 className='text-clamp_intro font-Iran_Bold '>
              ظرف آب و غذای گربه
            </h3>
            <p className='mt-5 text-justify'>
              ظرف آب و غذای گربه یکی از ضروری‌ترین وسایل نگهداری گربه است که
              برای غذا دادن به گربه باید حتما آن را خریداری کنید. از انواع ظرف
              غذا می‌توان به ظرف پلاستیکی، استیل و سرامیک اشاره کرد. هنگام خرید
              ظرف غذای گربه دقت کنید زیاد گود نباشد تا گربه بتواند به راحتی از
              آن استفاده کند. ظرف غذای استیل به راحتی تمیز می‌شود و با گذشت زمان
              بو نمی‌گیرد. ظروف پلاستیکی بیشتر برای مسافرت و بیرون رفتن از خانه
              مناسب هستند. ظرف عذای گربه تنوع بالایی در اندازه، رنگ، مدل دارد که
              در ادامه می‌توانید با قیمت ارزان به صورت اینترنتی خریداری کنید.
              ​​​​​​​{" "}
            </p>
          </div>
        </div>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات گربه/</Link>
          <Link>لوازم نگهداری گربه</Link>
          <p>/ظرف اب و غذای گربه</p>
        </div>
        <Products brands={brands} products={waterAndFoodContainer} />
      </div>
    </div>
  );
}

export default WaterAndFoodContianer;
