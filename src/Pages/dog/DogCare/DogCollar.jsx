import React, { useEffect, useState } from "react";
import { getDogCollarBrands, getDogCollar } from "../../../getData/GetDataDog";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../../Components/CatDryFood/Products";
function DogCollar() {
  const [dogCollar, setDogCollar] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchDogCollar"],
    queryFn: getDogCollar,
    onError: (error) => {
      console.log("error", error);
    },
  });
  const {
    data: dataBrands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useQuery({
    queryKey: ["fetchBrandsDogCollar"],
    queryFn: () => getDogCollarBrands(),
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
      setDogCollar(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10 h-100'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات سگ/</Link>
          <Link>لوازم نگهداری سگ</Link>
          <p>/ قلاده سگ</p>
        </div>
        <Products brands={brands} products={dogCollar} />
      </div>
    </div>
  );
}

export default DogCollar;
