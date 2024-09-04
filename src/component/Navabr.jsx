import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

const Navabr = () => {
    const [show, setShow] = useState(false)
    const handleclick = () => {
        setShow(!show);
    }
    return (
        <nav className='absolute w-full z-50 py-4'>
            <div className=' container'>
                <div className=' flex justify-between md:hidden'>
                    <div className=' md:hidden'>
                        <picture>
                            <img src={logo} alt="" />
                        </picture>
                    </div>
                    <div onClick={handleclick} className=' md:hidden  right-7 mt-4 text-xl text-white absolute z-50'>
                        {
                            show == true ? <RxCross2 /> : <FaBars />
                        }
                    </div>
                </div>
                <div className={`md:flex items-center justify-between text-center bg-[#275cac] md:bg-transparent
               ${show ? "translate-y-[-100px]" :"translate-y-[-400px]" }   md:translate-y-[0px] right-[-300px] duration-1000`}>
                    <div className=' md:block hidden'>
                        <picture>
                            <img src={logo} alt="" />
                        </picture>
                    </div>
                    <div>
                        <ul className='flex md:flex-row flex-col gap-y-4 justify-center items-center gap-x-7 text-white text-[18px] font-DMSans font-medium'>
                            <li className='flex gap-x-2 items-center'> <h2>Home</h2>  <IoIosArrowDown /></li>
                            <li className='flex gap-x-2 items-center'> <h2>Features</h2></li>
                            <li className='flex gap-x-2 items-center'> <h2>Service</h2>  <IoIosArrowDown /></li>
                            <li className='flex gap-x-2 items-center'> <h2>Pages</h2>  <IoIosArrowDown /></li>
                            <li className='flex gap-x-2 items-center'> <h2>Blog</h2></li>
                        </ul>
                    </div>
                    <div className=' md:flex items-center gap-x-6 font-DMSans text-[18px] text-white md:mt-0 mt-4 md:pb-0 pb-5'>
                        <h2>
                            Login
                        </h2>
                        <div >
                            <h2 className=' bg-secoundery px-6 py-2 rounded-md text-primary inline-block md:mt-0 mt-4'>
                                Register
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navabr