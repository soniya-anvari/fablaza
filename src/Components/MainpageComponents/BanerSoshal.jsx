import React from "react";
import baner1 from "../../assets/images/baner/section-baner/banners1.png";
import baner2 from "../../assets/images/baner/section-baner/banners2.png";
import { Link } from "react-router-dom";

function BanerSoshal() {
  return (
    <div className='w-10/12 gap-5 flex m-auto mt-12 '>
      <div className=" w-1/2 my-8">
        <Link  to="/">
          <img className="w-full " src={baner1} alt="" />
        </Link>
      </div>
      <div className="w-1/2 my-8">
        <Link  to="/">
          <img className="w-full" src={baner2} alt="" />
        </Link>
      </div>

    </div>
  );
}

export default BanerSoshal;
