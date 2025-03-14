import React, { useEffect, useState } from "react";
import {
  getRodentFood,
  getRodentsFoodBrands,
} from "../../getData/GetDataRodent.js";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../Components/CatDryFood/Products";
function RodentFood() {
  const [birdFoods, setBirdDFoods] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchBirdFoods"],
    queryFn: getRodentFood,
    onError: (error) => {
      console.log("error", error);
    },
  });
  const {
    data: dataBrands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useQuery({
    queryKey: ["fetchBrandsBirdFood"],
    queryFn: () => getRodentsFoodBrands(),
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
      setBirdDFoods(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link> محصولات جوندگان </Link>
          <p>/ غذای جوندگان</p>
        </div>
        <Products brands={brands} products={birdFoods} />
      </div>
    </div>
  );
}

export default RodentFood;
