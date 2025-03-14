import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import NavLinks from "../Components/NavLinks";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCart from "../assets/images/icons/Shopping-Cart.svg";
import SaveLike from "../assets/images/icons/heart-solid.svg";
import { SET_IS_OPEN } from "../features/cartSlice";
import { cart } from "ionicons/icons";
import Cart from "../Components/Cart";

const Navbar = () => {
 // const products = useSelector((state) => state.products);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const { isOpen } = useSelector((state) => state.cartIsOpen);
  useEffect(() => {
    console.log(open);
    if (open) {
      document.body.style.overflow = "hiddn";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className='bg-white'>
      <div className='flex flex-col md:flex-row w-full md:w-10/12 m-auto items-center font-medium justify-around'>
        <div className=' w-full md:w-10/12  m-auto my-5 flex gap-5 items-center'>
          <div className='flex w-full md:w-3/12 '>
            <div className='order-2 md:order-1 w-full'>
              <img src={logo} alt='petshop-Logo' className="md:w-full" />
            </div>
            <div
              className='text-3xl w-full  md:hidden order-1'>
              {!open && (
                <div className="bg-white py-3 px-3 rounded-full md:hidden" onClick={() => setOpen(!open)}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 17H20M4 12H20M4 7H20" stroke="#651fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <ul className='md:flex w-9/12 hidden  items-center  '>
            <NavLinks />
          </ul>
          <div className='md:block hidden'></div>
          {/* Mobile nav */}
          <ul
            className={`md:hidden px-4 bg-white fixed inset-0 z-50 w-3/4 top-0 overflow-y-auto bottom-0 py-10 pl-4 duration-500 ${open ? "right-0" : "right-[-100%]"}
`}>
            <li className="flex flex-row-reverse items-center justify-between mb-7">
              <div
                className=' text-black cursor-pointer'
                onClick={() => setOpen(!open)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-x-lg'
                  viewBox='0 0 16 16'>
                  <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z' />
                </svg>
              </div>
              <div>
                <Link to='/' className=' text-black '>
                  <img src={logo} alt='petshop-Logo' className="w-52" />
                </Link>
              </div>
            </li>
            <NavLinks />
            <div className='py-5'></div>
          </ul>
          <div className={`md:hidden bg-[#00000034] absolute inset-0 z-40 w-full top-0 overflow-y-auto bottom-0 py-10 pl-4 duration-500 ${open ? "block" : "hidden"}`} onClick={() => setOpen(!open)}></div>
        </div>
        <div className='flex w-full md:w-2/12 md:justify-end gap-4 items-center'>
          <div className='w-full relative flex gap-5 md:justify-end justify-between mx-2 items-center'>
            <div className='flex flex-row md:gap-4 items-center md:items-start mt-5 md:mt-0'>
              <Link
                to="/login" className='text-text_orange md:text-black font-Iran_Bold'>
                <span>
                  <svg width="30" height="29" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1H16C17.1046 1 18 1.89543 18 3V15C18 16.1046 17.1046 17 16 17H13" stroke="#651FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 13L13 9L9 5" stroke="#651FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 9H1" stroke="#651FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>


                </span>
              </Link>
              <Link
                to="/user-panel" className='text-text_orange md:text-black font-Iran_Bold flex flex-col  items-center'>
                <span>
                  <svg width="27" height="30" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1309 19.6603H4.13086C2.75015 19.6603 1.63086 18.541 1.63086 17.1603C1.63086 13.0796 7.63086 13.1603 9.63086 13.1603C11.6309 13.1603 17.6309 13.0796 17.6309 17.1603C17.6309 18.541 16.5116 19.6603 15.1309 19.6603Z" stroke="#651FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.63086 9.66022C11.84 9.66022 13.6309 7.86936 13.6309 5.66022C13.6309 3.45108 11.84 1.66022 9.63086 1.66022C7.42172 1.66022 5.63086 3.45108 5.63086 5.66022C5.63086 7.86936 7.42172 9.66022 9.63086 9.66022Z" stroke="#651FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
            <div className="flex items-center  gap-5 ">
              <div className="cursor-pointer" onClick={() => {
                dispatch(SET_IS_OPEN(!isOpen))
              }}>
                <p className='px-1 text-white text-[11px]  absolute top-[20px]  rounded-[50%] bg-purple_l'>
                  {/*products.count*/}
                </p>
                <svg width="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.78571 3H17.2251C18.5903 3 19.5542 4.33739 19.1225 5.63246L17.4558 10.6325C17.1836 11.4491 16.4193 12 15.5585 12H5.07142M3.78571 3L3.74531 2.71716C3.60455 1.73186 2.76071 1 1.76541 1H1M3.78571 3L5.07142 12M5.07142 12L5.25469 13.2828C5.39545 14.2681 6.23929 15 7.23459 15H16M16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15ZM10 17C10 18.1046 9.10457 19 8 19C6.89543 19 6 18.1046 6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17Z" stroke="#651fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </div>
              {isOpen && (
                <div
                  className={`fixed transition-all duration-1000 ${isOpen
                    ? "translate-x-0 opacity-100 "
                    : "translate-x-full opacity-0 pointer-events-none"
                    } overflow-y-auto top-0 right-0 w-80 h-full bg-white shadow-lg  `}>
                  <Cart />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
