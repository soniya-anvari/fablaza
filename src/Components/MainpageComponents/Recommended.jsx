import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { api } from "../../api/api";

function Recommended() {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await api.get("?q=مکمل");
        setRecommendedProducts(res.data.data.products);
        console.log(res.data.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCatData();
  }, []);
  return (
    <div className='md:w-10/12 m-auto text-clamp_des'>
      <div className='flex gap-1  mt-10 ps-8 md:ps-0 justify-between mb-7'>
        <h2 className='font-Iran_Bold '> محصولات کاهش وزن </h2>
        <sapan className="flex items-center gap-3 ">
          <p className="text-clamp text-purple_d">
            مشاهده بیشتر
          </p>
          <p>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 7L7 1" stroke="#2B7DC0" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </p>
        </sapan>
      </div>
      <Slider Products={recommendedProducts} />
    </div>
  );
}

export default Recommended;
