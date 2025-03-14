import React from "react";

import OpinionSVG from "../../assets/images/icons/Opinion.svg"
import ShoppingSVG from "../../assets/images/icons/Shopping-Cart.svg"
import BoxMessageSVG from "../../assets/images/icons/BoxMessage.svg"
import cardSVG from "../../assets/images/icons/card.svg"
import notifSVG from "../../assets/images/icons/notif.svg"
import messageNotifSVG from "../../assets/images/icons/message2.svg"
const CounterUserPanel = () => {
    return (
        <div>
            <h2 className="text-clamp_intro text-purple_d mt-6">
                پیشخوان
            </h2>
            <div className="w-full bg-white mt-10   py-14 px-8 rounded-xl text-black">
                <p >
                    آقا/خانوم <span className="font-Iran_Bold">طاها طباطبایی</span> خوش امدید
                </p>
                <ul className="flex items-center mt-14 w-full  flex-wrap" >
                    <li className="lg:w-3/12 md:w-1/2  w-full">
                        <div className="p-5 bg-white shadow-xl shadow-[#00000017] border-[1px] border-[#0000001c] flex gap-7 items-center justify-between rounded-xl mx-1  my-1">
                            <div>
                                <p className="text-clamp_des text-black">
                                    0
                                </p>
                                <p className="text-black">
                                    دیدگاه های ثبت شده
                                </p>
                            </div>
                            <div>
                                <img className="w-12" src={OpinionSVG} alt="" />
                            </div>
                        </div>
                    </li>
                    <li className="lg:w-3/12 md:w-1/2 w-full">
                        <div className="p-5 bg-white shadow-xl shadow-[#00000017] border-[1px] border-[#0000001c] flex gap-7 items-center justify-between rounded-xl mx-1 my-1">
                            <div>
                                <p className="text-clamp_des">
                                    0
                                </p>
                                <p className="text-black">
                                    محصولات خریداری شده
                                </p>
                            </div>
                            <div>
                                <img className="w-12" src={ShoppingSVG} alt="" />
                            </div>
                        </div>
                    </li>
                    <li className="lg:w-3/12 md:w-1/2 w-full">
                        <div className="p-5 bg-white shadow-xl shadow-[#00000017] border-[1px] border-[#0000001c] flex gap-7 items-center justify-between rounded-xl mx-1 my-1">
                            <div>
                                <p className="text-clamp_des">
                                    0
                                </p>
                                <p className="text-black">
                                    تیکت های پشتیبانی
                                </p>
                            </div>
                            <div>
                                <img className="w-12" src={BoxMessageSVG} alt="" />
                            </div>
                        </div>
                    </li>
                    <li className="lg:w-3/12 md:w-1/2 w-full">
                        <div className="p-5 bg-white shadow-xl shadow-[#00000017] border-[1px] border-[#0000001c] flex gap-7 items-center justify-between rounded-xl mx-1 my-1">
                            <div>
                                <p className="text-clamp_des">
                                    0
                                </p>
                                <p className="text-black">
                                    کل مبلغ سفارشات
                                </p>
                            </div>
                            <div>
                                <img className="w-12" src={cardSVG} alt="" />
                            </div>
                        </div>
                    </li>

                </ul>
                <div className="w-full flex flex-wrap mt-5">
                    <div className="md:w-1/2 w-full ">
                        <div className="m-1  p-5 bg-white shadow-xl shadow-[#00000017] border-[1px] border-[#0000001c]  rounded-xl ">
                            <div className="flex gap-7 items-center justify-between">
                                <div>
                                    <p className="text-black">
                                        اعلانات اخیر
                                    </p>
                                </div>
                                <div>
                                    <img className="w-8" src={notifSVG} alt="" />
                                </div>
                            </div>
                            <div className="w-full mt-5">
                                هیج اعلانانی وجود ندارد
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full  ">
                        <div className="m-1 p-5 bg-white shadow-xl shadow-[#00000017] border-[1px] border-[#0000001c]  rounded-xl ">
                            <div className="flex gap-7 items-center justify-between">
                                <div>
                                    <p className="text-black">
                                        پیام های اخیر
                                    </p>
                                </div>
                                <div>
                                    <img className="w-8" src={messageNotifSVG} alt="" />
                                </div>
                            </div>
                            <div className="w-full mt-5">
                                هیج پیامی وجود ندارد
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CounterUserPanel