import React, { useEffect, useState } from "react";
import {
  getDogUndelayPadBrands,
  getDogUnderlayPad,
} from "../../getData/GetDataDog";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../Components/CatDryFood/Products";
function UnderlayPad() {
  const [dogUndelayPad, setDogUndelayPad] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchDogDryFoods"],
    queryFn: getDogUnderlayPad,
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
    queryFn: () => getDogUndelayPadBrands(),
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
      setDogUndelayPad(dataProduct);
    }
  }, [dataProduct]);
  console.log("irasd",brands);
  
  return (
    <div className='bg-bg_gray_pages pt-10 h-100'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات سگ/</Link>
          <Link>سلامت سگ</Link>
          <p>/ پد زیر انداز بهداشتی سگ</p>
        </div>
        <Products brands={brands} products={dogUndelayPad} />
      </div>
    </div>
  );
}

export default UnderlayPad;
