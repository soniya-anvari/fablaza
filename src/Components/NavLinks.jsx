import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../constant/MyLinks";
import "ionicons/icons";
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const location = useLocation();
  useEffect(() => {
    setSubHeading("");
    setHeading("");
  }, [location.pathname]);

  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className='px-3 text-left md:cursor-pointer group text-black '>
            <h3
              className={`${index === 0 ? "md:text-purple_d  md:pr-4 md:pl-2 md:rounded-xl" : ""}  py-4 flex gap-2 justify-between items-center group text-clamp `}
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}>


              <Link to={link.link} > {link.name} </Link>
              <span className='text-clamp md:hidden inline '>
                {heading === link.name ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className={`${link.submenu != true && 'hidden'} bi bi-chevron-down`}
                    viewBox='0 0 16 16'>
                    <path
                      fill-rule='evenodd'
                      d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    className={`${link.submenu != true && 'hidden'} bi bi-chevron-down`}
                    viewBox='0 0 16 16'>
                    <path
                      fill-rule='evenodd'
                      d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                    />
                  </svg>
                )}
              </span>
              <span className={`${link.submenu == "" && 'hidden'} text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-5`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className={`${link.submenu != true && 'hidden'} bi bi-chevron-down`}
                  viewBox='0 0 16 16'>
                  <path
                    fill-rule='evenodd'
                    d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                  />
                </svg>
              </span>
            </h3>
            {link.submenu && (
              <div className="">
                <div className='absolute z-50  top-36 hidden group-hover:md:block hover:md:block text-start  '>

                  <div className='py-3'>
                    <div
                      className='w-5 h-5 right-10 absolute  mt-1  bg-white rotate-45  rounded-md bg-[#00000065]'></div>
                  </div>
                  <div className='border-[1px] shadow-2xl shadow-[#00000041]  border-purple_l border-t-0 rounded-xl bg-white p-7 flex gap-14'>
                    {link.sublinks.map((mysublinks) => (
                      <div className=" ">
                        <h3 className='text-lg font-semibold'>
                          <Link
                            to={mysublinks.link}
                            className='hover:text-primary'>
                            {mysublinks.Head}
                          </Link>
                        </h3>
                        {mysublinks.sublink.map((slink) => (
                          <li className='text-sm text-gray-600 my-2.5'>
                            <Link
                              to={slink.link}
                              className='hover:text-primary'>
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
           bg-[#d0d0d02c] rounded-md mr-2`}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h3
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className='py-4 pl-7 font-Iran_Light md:font-semibold text-clamp md:pr-0 pr-5 flex justify-between items-center cursor-pointer'>
                    {slinks.Head}
                    <span className={`${slinks.sublink == "" && 'hidden'} bi bi-chevron-down`}>
                      {subHeading === slinks.Head ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          class='bi bi-chevron-up'
                          viewBox='0 0 16 16'>
                          <path
                            fill-rule='evenodd'
                            d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          class='bi bi-chevron-down'
                          viewBox='0 0 16 16'>
                          <path
                            fill-rule='evenodd'
                            d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
                          />
                        </svg>
                      )}
                    </span>
                  </h3>
                  <div
                    className={`${subHeading === slinks.Head && slinks.sublink.length != 0 ? "md:hidden" : "hidden"
                      } px-7 mb-7 rounded-xl`}>
                    {slinks.sublink.map((slink) => (
                      <Link to={slink.link}>
                        <li className='py-4 pl-14 text-clamp cursor-pointer'>
                          {slink.name}
                        </li>
                      </Link>
                    ))}
                  </div>
                  <hr className={` text-[#661fff36] mx-auto max-w-[90%]`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
