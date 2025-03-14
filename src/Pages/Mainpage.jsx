import React from "react";
import TopeBanner from "../Components/MainpageComponents/TopeBanner";
import Banner from "../Components/MainpageComponents/Banner";

import PetOff from "../Components/MainpageComponents/PetOff";
import PopularCategory from "../Components/MainpageComponents/popularCategori";
import DiscountProducts from "../Components/MainpageComponents/DiscountProducts";
import CatProducts from "../Components/MainpageComponents/CatProducts";
import DogProducts from "../Components/MainpageComponents/DogProducts";
import Veterinarian from "../Components/MainpageComponents/Veterinarian";
import Recommended from "../Components/MainpageComponents/Recommended";
import ContactBox from "../Components/MainpageComponents/ContactBox";
import SearchBar from "../Components/MainpageComponents/SearchBar";
import Cart from "../Components/Cart";
import BanerSoshal from "../Components/MainpageComponents/banerSoshal";

function Mainpage() {
  return (
    <div>
      <SearchBar />
      <Banner />
      <PopularCategory />
      <PetOff />
      {/* <DiscountProducts /> */}
      <CatProducts />
      <DogProducts />
      <Veterinarian />
      <Recommended />
      <BanerSoshal/>
      {/* <ContactBox />  */}
    </div>
  );
}

export default Mainpage;
