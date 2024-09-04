import React from 'react'
import logo2 from '../assets/logo2.png'
import { FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { TiSocialTwitter } from 'react-icons/ti'
import { LuSend } from 'react-icons/lu'

const Footer = () => {
    return (
        <footer className=' container my-14'>
            <div className=' md:flex  flex-wrap justify-around'>
                <div className=' md:w-3/12 w-6/12'>
                    <picture>
                        <img src={logo2} alt="" />
                    </picture>
                    <h2 className=' text-base font-DMSans text-[#645E76] mt-8'>
                        Build a modern and creative website with Innovate.
                    </h2>
                    <div className=' flex gap-4 mt-10'>
                        <div className=' p-5 bg-[#EEEEEE] rounded-full text-xl'>
                            <FaGoogle />
                        </div>
                        <div className=' p-5 bg-[#EEEEEE] rounded-full text-xl'>
                            <TiSocialTwitter />
                        </div>
                        <div className=' p-5 bg-[#EEEEEE] rounded-full text-xl'>
                            <FaInstagram />
                        </div>
                        <div className=' p-5 bg-[#EEEEEE] rounded-full text-xl'>
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
                <div className=' md:w-3/12 w-6/12'>
                    <h2 className=' text-[#2C2643] font-DMSans font-medium text-[18px]'>
                        Product
                    </h2>
                    <ul className=' flex flex-col gap-4 text-base font-DMSans text-[#645E76] mt-5'>
                        <li>Landingpages</li>
                        <li>Pricing</li>
                        <li>Benefits</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className=' md:w-3/12 w-6/12'>
                    <h2 className=' text-[#2C2643] font-DMSans font-medium text-[18px]'>Company</h2>
                    <ul className=' flex flex-col gap-4 text-base font-DMSans text-[#645E76] mt-5'>
                        <li>Contact</li>
                        <li>Partners</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className=' md:w-3/12 w-6/12'>
                    <h2 className=' text-[#2C2643] font-DMSans font-medium text-[18px]'>Resources</h2>
                    <ul className=' flex flex-col gap-4 text-base font-DMSans text-[#645E76] mt-5'>
                        <li>Guides and resources</li>
                        <li>Blog</li>
                        <li>Tools</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className=' md:w-3/12 w-6/12'>
                    <h2 className=' text-[#2C2643] font-DMSans font-medium text-[18px]'>Get Latest Updates</h2>
                    <p className='text-[#645E76] font-DMSans text-[18px] mt-5'>
                        Subscribe to our newsletter and get many interesting things every week
                    </p>
                    <div className=' flex py-2 border-2 px-3 mt-10'>
                        <div>
                            <input type="email" placeholder='Enter your email' className=' outline-none text-base font-Chivo text-primary' />
                        </div>
                        <div className=' text-2xl text-[#3639A4] translate-x-[-30px]'>
                            <LuSend />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer