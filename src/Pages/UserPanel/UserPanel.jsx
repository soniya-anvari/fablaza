import React, { useState } from "react";


import CounterUserPanel from "../../Components/user panel/Counter";
import logo from "../../assets/images/logo.svg"
import EditUserInfo from "../../Components/user panel/EditUserInfo";
import OrdersDashboard from "../../Components/user panel/OrdersDashboard";
import { Link } from "react-router-dom";
import { products } from "../../constant/Product";
import { useSelector } from "react-redux";
const UserPanel = () => {
    const [tab, setTab] = useState("pishkhon")
    const [isOpen, setIsOpen] = useState(false)
    const products = useSelector((state) => state.products);

    const getTab = () => {
        switch (tab) {
            case "pishkhon":
                return <CounterUserPanel />
            case "editUser":
                return <EditUserInfo />
            case "ordersDashboard":
                return <OrdersDashboard />
        }
    }
    return (
        <>
            <div className="box-border flex bg-[#eaeaea] items-stretch h-full">
                <div className="lg:w-2/12 flex">
                    <div className={`${isOpen ? "block absolute -right-0" : "absolute -right-full "} lg:static duration-500 z-50  lg:flex lg:w-full w-2/3 h-[100vh] p-1 `}>
                        <div className=" w-full h-full bg-white rounded-xl py-1 px-2 ">
                            <div className="mt-5 mb-8 px-2 flex items-center justify-between">
                                <img className="w-44" src={logo} alt="" />
                                <div className="lg:hidden" onClick={(e) => {
                                    setIsOpen(!isOpen)
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#272727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </div>
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li className={`${tab === "pishkhon" ? "border-[1px] border-purple_d bg-purple_l text-white" : "text-black"} duration-300 transition-colors  cursor-pointer flex items-center gap-1 w-full  py-3 px-4 rounded-xl text-clamp`} onClick={(e) => {
                                    setTab("pishkhon")
                                    setIsOpen(!isOpen)
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 16V12M12 16V8M8 16V14M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12Z" stroke={`${tab === "pishkhon" ? "#fff" : "#272727"}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    پیش خوان
                                </li>
                                <li className={`${tab === "ordersDashboard" ? "border-[1px] border-purple_d bg-purple_l text-white" : "text-black"} duration-300 transition-colors  cursor-pointer flex items-center gap-1 w-full  py-3 px-4 rounded-xl text-clamp`} onClick={(e) => {
                                    setTab("ordersDashboard")
                                    setIsOpen(!isOpen)
                                }} >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 8H16M8 12H16M12 16H16M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12Z" stroke={`${tab === "ordersDashboard" ? "#fff" : "#272727"}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    سفارشات
                                </li>
                                <li className={`${tab === "editUser" ? "border-[1px] border-purple_d bg-purple_l text-white" : "text-black"} duration-300 transition-colors cursor-pointer flex items-center gap-1 w-full  py-3 px-4 rounded-xl text-clamp`} onClick={(e) =>{
                                     setTab("editUser")
                                     setIsOpen(!isOpen)
                                     }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 18.7023C18 15.6706 14.5 15 12 15C9.5 15 6 15.6706 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke={`${tab === "editUser" ? "#fff" : "#272727"}`} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    جزعیات حساب/ ویرایش
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${isOpen ? "block absolute left-0" : "hidden"} duration-500 z-40 lg:hidden w-full h-[100vh] bg-[#0000003c]`} onClick={(e) => {
                        setIsOpen(!isOpen)
                    }}></div>
                </div>
                <div className="lg:w-10/12 h-[100vh] overflow-auto w-full p-5">
                    <nav className="w-full  rounded-xl flex items-center justify-between lg:flex-row flex-row-reverse">
                        <div className="flex gap-3 ">
                            <div className="bg-white p-3 rounded-full">
                                <Link className="" to="/">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.49996 7C7.96131 5.53865 9.5935 4.41899 10.6975 3.74088C11.5021 3.24665 12.4978 3.24665 13.3024 3.74088C14.4064 4.41899 16.0386 5.53865 17.5 7C20.6683 10.1684 20.5 12 20.5 15C20.5 16.4098 20.3895 17.5988 20.2725 18.4632C20.1493 19.3726 19.3561 20 18.4384 20H17C15.8954 20 15 19.1046 15 18V16C15 15.2043 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87864 13.8787C9.31603 14.4413 8.99996 15.2043 8.99996 16V18C8.99996 19.1046 8.10453 20 6.99996 20H5.56152C4.64378 20 3.85061 19.3726 3.72745 18.4631C3.61039 17.5988 3.49997 16.4098 3.49997 15C3.49997 12 3.33157 10.1684 6.49996 7Z" stroke="#651fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="bg-white py-3 px-4 rounded-full flex items-center justify-center relative">
                                <p className='px-1 text-white text-[12px]  absolute top-[15px] right-3 rounded-[50%] bg-purple_l'>
                                    {products.count}
                                </p>
                                <svg width="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.78571 3H17.2251C18.5903 3 19.5542 4.33739 19.1225 5.63246L17.4558 10.6325C17.1836 11.4491 16.4193 12 15.5585 12H5.07142M3.78571 3L3.74531 2.71716C3.60455 1.73186 2.76071 1 1.76541 1H1M3.78571 3L5.07142 12M5.07142 12L5.25469 13.2828C5.39545 14.2681 6.23929 15 7.23459 15H16M16 15C14.8954 15 14 15.8954 14 17C14 18.1046 14.8954 19 16 19C17.1046 19 18 18.1046 18 17C18 15.8954 17.1046 15 16 15ZM10 17C10 18.1046 9.10457 19 8 19C6.89543 19 6 18.1046 6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17Z" stroke="#651fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white py-3 px-3 rounded-full lg:hidden" onClick={(e) => {
                                setIsOpen(!isOpen)
                            }}>
                                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 17H20M4 12H20M4 7H20" stroke="#651fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>


                        </div>
                    </nav>
                    {
                        getTab()
                    }
                </div>
            </div>
        </>
    )
}
export default UserPanel