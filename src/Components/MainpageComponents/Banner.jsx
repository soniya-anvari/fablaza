import baner1 from "../../assets/images/baner/slide-1.jpg"
import baner2 from "../../assets/images/baner/slide-2.jpg"
import baner3 from "../../assets/images/baner/slide-3.jpg"

function Banner() {
  return (
    <>
      <div className=' mt-10 overflow-hidden hidden lg:flex flex-col bg-cover rounded-2xl lg:h-[400px] bg-no-repeat w-10/12 m-auto '>
       <img className="w-full h-full" src={baner1} alt="" />
      </div>
      
    </>
  );
}

export default Banner;
