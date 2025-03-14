import heartIcon from "../../assets/images/heartCat.png.webp";
import petshop from "../../assets/images/petShop.png.webp";
import foodIcon from "../../assets/images/foodIcon_84,h_84,r_k.png.webp";

function ContactBox() {
  return (
    <div className='bg-bg_gray_box my-10'>
      <div className='w-full md:w-10/12 m-auto py-10 ps-5 sm:ps-16 md:ps-0 flex flex-col md:flex-row  justify-around '>
        <div className='flex items-center gap-4   '>
          <div>
            <img src={heartIcon} />
          </div>
          <div>
            <h3 className=' font-Iran_Bold'>تضمین اصالت کالا</h3>
            <p>​​برندهای معتبر​​​​​​​</p>
          </div>
        </div>
        <div className='flex items-center gap-4 mt-10 md:mt-0'>
          <div>
            <img src={petshop} />
          </div>
          <div>
            <h3 className='font-Iran_Bold'>
              آیا امروز کاری هست که بتوانم به شما کمک کنم؟​​​​​​​
            </h3>
            <p> شعبه مرکزی​​​​​​​</p>
          </div>
        </div>
        <div className='flex items-center gap-4 mt-10 md:mt-0'>
          <div>
            <img src={foodIcon} />
          </div>
          <div>
            <h3 className='font-Iran_Bold'>
              آنچه را که به دنبالش بودید پیدا نکردید؟​​​​​​​
            </h3>
            <p> ارتباط با ما</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBox;
