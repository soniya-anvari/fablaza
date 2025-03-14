import { Link } from "react-router-dom";
import { pupolar_Categories } from "../../constant/Product";

function PopularCategori() {
  return (
    <div className='my-24 '>
      <h3 className='text-center font-Iran_Bold text-clamp_des mb-14 '>
        در دسته‌بندی‌‌های محبوب‌ جستجو کنید
      </h3>
      <div className='flex gap-7 mt-7 w-10/12 m-auto items-stretch justify-center flex-wrap text-center'>
        {pupolar_Categories.map((categori) => (
          <div className="flex  items-center gap-5 bg-white shadow-lg shadow-[#00000023] py-7 px-6 border-[1px] border-[#94949427] rounded-lg" key={categori.id}>

            <div className="text-right">
              <h3 className="py-1 font-Iran_Bold text-clamp_1">{categori.name}</h3>
              <p className="py-1 font-Iran_Light text-clamp">
                لورم ایپسوم متن ساختگی با تولید
              </p>
              <Link to="/" className="bg-purple_d text-white py-1 px-3 flex items-center gap-2 w-24 rounded-lg mt-5">
                <span>
                  مشاهده
                </span>
                <span>
                  <svg width="24" height="24" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 8L5 6L7 4" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </span>
              </Link>
            </div>
            <div className="">
              <img className="w-36 " src={categori.image} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategori;
