import React, { useEffect, useState } from "react";
import {
  getDogWetFoodsBrands,
  getDogWetFoods,
} from "../../../getData/GetDataDog";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../../Components/CatDryFood/Products";
function DogRewardFoods() {
  const [dogWetFoods, setDogWetFoods] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchDogDryFoods"],
    queryFn: getDogWetFoods,
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
    queryFn: () => getDogWetFoodsBrands(),
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
      setDogWetFoods(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10 h-100'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات سگ/</Link>
          <Link>غذای سگ</Link>
          <p>/ غذای تر سگ</p>
        </div>
        <Products brands={brands} products={dogWetFoods} />
      </div>
    </div>
  );
}

export default DogRewardFoods;
