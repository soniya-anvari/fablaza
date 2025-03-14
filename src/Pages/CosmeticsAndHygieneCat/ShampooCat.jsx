import React, { useEffect, useState } from "react";
import { getCatShampoo, getCatBinSoilBrands } from "../../getData/GetDataCat";
import CatShampoo from "../../assets/images/shampoCat.jpg.webp";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Products from "../../Components/CatDryFood/Products";
function CatBinSoil() {
  const [shampoo, setShampoo] = useState([]);
  const [brands, setBrands] = useState([]);
  const {
    data: dataProduct,
    error: errorProduct,
    isLoading: loadingProduct,
  } = useQuery({
    queryKey: ["fetchCatShampoo"],
    queryFn: getCatShampoo,
    onError: (error) => {
      console.log("error", error);
    },
  });
  const {
    data: dataBrands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useQuery({
    queryKey: ["fetchBrandsCatShampoo"],
    queryFn: () => getCatShampoo(),
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
      setShampoo(dataProduct);
    }
  }, [dataProduct]);
  return (
    <div className='bg-bg_gray_pages pt-10'>
      <div className='w-11/12 md:w-10/12 m-auto '>
        <div className='flex flex-col md:flex-row text-center md:text-right gap-8 mt-10 bg-white rounded-[30px] p-5'>
          <img
            src={CatShampoo}
            alt='cat-image'
            className='w-3/4 h-3/4 m-auto'
          />
          <div>
            <h3 className='text-clamp_intro font-Iran_Bold '>
              شامپو و نرم کننده گربه
            </h3>
            <p className='mt-5 text-justify'>
              شامپو و نرم کننده مو از محصولات مراقبت از مو است که برای از بین
              بردن چربی‌های روی پوست می‌توان از آن استفاده کرد. هر چند وقت یکبار
              باید گربه را با شامپو مخصوص گربه شستشو دهید و چربی‌ها و کثیفی‌های
              موی حیوان را پاک کنید. برای گربه ‌هایی که موی بلند یا زبر دارند
              بهتر است از نرم کننده گربه استفاده کنید. به هیچ وجه از شامپوی
              انسان برای گربه استفاده نکنید زیرا PH بدن انسان و گربه متفاوت است.
              هنگام خرید شامپو گربه به جنس، تراکم مو و ضخامت پوست حیوان خانگی
              خود توجه کنید. در ادامه می توانید انواع شامپو و نرم کننده گربه را
              با قیمت ارزان به صورت اینترنتی خریداری کنید.​​​​​​​{" "}
            </p>
          </div>
        </div>
        <div className='flex text-[gray] text-clamp mt-10'>
          <Link>پت شاپ انلاین/ </Link>
          <Link>محصولات گربه/</Link>
          <Link>لوازم نگهداری گربه</Link>
          <p>/ شامپو و نرم کننده گربه</p>
        </div>
        <Products brands={brands} products={shampoo} />
      </div>
    </div>
  );
}

export default CatBinSoil;
