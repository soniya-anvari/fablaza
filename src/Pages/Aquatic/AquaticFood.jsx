import React, { useEffect, useState } from "react";
import {
  getAquaticFood,
  getAquaticFoodBrands,
} from "../../getData/GetDataAquatic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../Components/CatDryFood/Products";
function AquaticFood() {
  const [aquaticFoods, setAquaticFoods] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchAquaticFoods"],
    queryFn: getAquaticFood,
    onError: (error) => {
      console.log("error", error);
    },
  });
  const {
    data: dataBrands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useQuery({
    queryKey: ["fetchBrandsAquaticFood"],
    queryFn: () => getAquaticFoodBrands(),
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
      setAquaticFoods(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link> محصولات ابزیان </Link>
          <p>/ غذای ابزیان</p>
        </div>
        <Products brands={brands} products={aquaticFoods} />
      </div>
    </div>
  );
}

export default AquaticFood;
