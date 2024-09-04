import React from 'react'
import { MdStar } from 'react-icons/md'

const About = () => {
    return (
        <section id='about' className=' md:py-20 py-4 bg-[#F4FAFA] overflow-hidden'>
            <div className=' container '>
                <div className=' md:flex items-center justify-between'>
                    <div className=' md:w-5/12'>
                        <div>
                            <h2 className=' md:text-[46px] text-3xl leading-none font-bold font-Chivo'>
                                What they are talking
                                about us?
                            </h2>
                            <p className=' font-DMSans text-[18px] text-[#645E76]'>
                                testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.
                            </p>
                            <button className=' px-8 bg-[#3639A4] text-white text-[18px] font-DMSans py-2 mt-5 rounded-md'>
                                Get Started
                            </button>
                        </div>
                        <div className=' md:mt-14 mt-5 flex items-center '>
                            <div className='  flex'>
                                <div className=' w-9 h-9 rounded-full bg-[#C4C4C4]'>
                                </div>
                                <div className=' w-9 h-9 rounded-full bg-[#C4C4C4] translate-x-[-20px] border-2'>
                                </div>
                                <div className=' w-9 h-9 rounded-full bg-[#C4C4C4] translate-x-[-40px] border-2'>
                                </div>
                                <div className=' w-9 h-9 rounded-full bg-[#C4C4C4] translate-x-[-60px] border-2'>
                                </div>
                                <div className=' w-9 h-9 rounded-full bg-[#C4C4C4] translate-x-[-80px] border-2'>
                                </div>
                            </div>
                            <div>
                                <div className=' flex gap-x-3'>
                                    <div>
                                        <h2 className=' text-2xl font-extrabold text-[#52C5B6] font-Chivo pr-4 border-r-2
                                     border-black'>4.5</h2>
                                    </div>
                                    <div className=' flex text-[#ffbb1e] text-2xl'>
                                        <MdStar />
                                        <MdStar />
                                        <MdStar />
                                        <MdStar />
                                    </div>
                                </div>
                                <p className=' text-[18px] font-medium text-[#645E76] font-Chivo mt-3'>
                                    280k Total Review
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' md:w-5/12'>
                        <div className=' relative px-8 py-7 shadow-lg rounded-lg mt-6 md:mt-0'>
                            <div className=' w-[60px] h-[60px] rounded-full bg-[#534f4f] border-3 border-white absolute
                             top-[-30px]'>
                                <picture>
                                    <img src="" alt="" />
                                </picture>
                            </div>
                            <p className=' text-[18px] font-Chivo text-primary'>
                                Wow. Amazing Company Amazing Expert Manager. They know how to get things done when it comes to online trading.
                            </p>
                            <div className=' flex justify-between items-center'>
                                <div>
                                    <h2 className=' text-xl font-Chivo font-bold text-primary mt-6'>
                                        Antor Khan
                                    </h2>
                                    <h3 className=' font-Chivo text-[18px] text-[#645E76] mt-4'>
                                        Digital Market
                                    </h3>
                                </div>
                                <div className=' flex text-[#ffbb1e] text-2xl'>
                                    <MdStar />
                                    <MdStar />
                                    <MdStar />
                                    <MdStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About