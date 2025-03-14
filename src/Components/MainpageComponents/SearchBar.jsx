import React from "react";
import img from "../../assets/images/baner/Frame 8050.png"
const SearchBar = () => {
    return (
        <div className=" mx-auto  md:w-10/12   rounded-xl   md:py-20 px-1">
            <div className="w-2/2 border-[1px] rounded-xl border-[#afafaf3b]  ">
                <img src={img} alt="" />
            </div>
            <form action="" className="border-border_black border-[1px] rounded-xl bg-white w-2/2 flex overflow-hidden mt-7 gap-3 items-stretch shadow-xl">
                <input placeholder="  سپس لینک کپی شده را اینجا جایگذاری کنید وسپس بر روی سرچ بزنید" type="text" className="  text-clamp bg-transparent w-11/12 p-3  outline-none   " />
                <button className="text-clamp w-1/12  bg-purple_d rounded-xl m-1 grid  place-content-center items-center text-white border-border_black border-[1px]">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.3503 8.4057C16.3503 12.5478 12.9924 15.9057 8.85025 15.9057C4.70811 15.9057 1.35025 12.5478 1.35025 8.4057C1.35025 4.26356 4.70811 0.905701 8.85025 0.905701C12.9924 0.905701 16.3503 4.26356 16.3503 8.4057Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.3503 17.9057L14.1536 13.709" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </form>

        </div>
    )
}

export default SearchBar