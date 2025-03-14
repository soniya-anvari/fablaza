import React from "react";

const EditUserInfo = () => {
    return (
        <>
            <div>
                <h2 className="text-clamp_intro text-purple_d mt-6">
                    ویرایش اطلاعات حساب
                </h2>
                <div className="w-full bg-white mt-10   py-14 px-8 rounded-xl text-black">
                    <div className="flex items-center ">
                        <div className="w-[200px] h-[200px] flex items-center justify-center bg-[#f1f1f1] rounded-full">
                            <svg className="w-full h-full " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 18.7023C18 15.6706 14.5 15 12 15C9.5 15 6 15.6706 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z" stroke="#0000001f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <p>
                                    نام کاربری :
                                </p>
                                <p>
                                    tahagfr
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUserInfo