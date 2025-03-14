import sectionBaner1 from "../../assets/images/baner/section-baner/IMG_4558-1.jpg"
import sectionBaner2 from "../../assets/images/baner/section-baner/IMG_4559-1.jpg"

function Veterinarian() {
  return (
    <div className='flex flex-col md:flex md:flex-row mt-12   w-10/12 m-auto  gap-5'>
      <div className='w-full md:w-1/2  flex flex-col gap-5 order-2 md:order-1 '>
        <div className="w-full">
          <img src={sectionBaner1} alt="" />
        </div>
      </div>
      <div className='w-full md:w-1/2  flex flex-col gap-5 order-2 md:order-1 '>
          <div className="w-full">
            <img src={sectionBaner1} alt="" />
          </div>
        </div>

    </div>
  );
}

export default Veterinarian;
