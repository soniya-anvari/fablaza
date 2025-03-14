import React, { useEffect, useState } from "react";
import {
  getDogDryFoodsBrands,
  getDogDryFoods,
} from "../../getData/GetDataDog";
import banner from "../../assets/images/baner/section-baner/IMG_4558-1.jpg";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../Components/CatDryFood/Products";
function MainShop() {
  const [dogDryFoods, setDogDryFoods] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["/?q=مکمل"],
    queryFn: getDogDryFoods,
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
    queryFn: () => getDogDryFoodsBrands(),
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
      setDogDryFoods(dataProduct);
    }
  }, [dataProduct]);
  console.log(dataProduct);
  
  return (
    <div className='bg-bg_gray_pages pt-10'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <img src={banner} alt='banner' className='rounded-[30px]' />

        <div className='flex text-[gray] text-clamp mt-10'>
          <Link> فپلازا /  </Link>
          <Link> مکمل ها / </Link>
          <p>
          پروتئین
          </p>
        </div>
        <Products brands={brands} products={dogDryFoods} />
      </div>
    </div>
  );
}

export default MainShop;
