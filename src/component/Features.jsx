import React from 'react'
import features from '../assets/Features.png'
import features_icon1 from '../assets/features_icon1.png'
import features_icon2 from '../assets/features_icon2.png'
import features_icon3 from '../assets/features_icon3.png'

const Features = () => {
    return (
        <section id='features' className=' mt-20 container'>
            <div className=' md:flex justify-between md:px-0 px-2'>
                <div className=' md:w-5/12'>
                    <picture>
                        <img src={features} alt="" />
                    </picture>
                </div>
                <div className=' md:w-6/12'>
                    <div>
                        <h2 className=' md:text-[46px] text-[25px] md:text-start text-center text-primary font-Chivo font-bold'>
                            We provide features for your Business
                        </h2>
                        <div className=' mt-7 flex flex-wrap justify-between gap-6'>
                            <div className=' md:w-[40%]'>
                                <div>
                                    <picture>
                                        <img src={features_icon1} alt="" />
                                    </picture>
                                </div>
                                <div>
                                    <h2 className=' text-[22px] text-primary font-bold font-Chivo mt-2'>
                                        Fast and Easy to use
                                    </h2>
                                    <h4 className=' text-[18px] font-DMSans text-primary mt-2'>
                                        Easily to convert API with just a few clicks
                                    </h4>
                                </div>
                            </div>
                            <div className=' md:w-[40%]'>
                                <div>
                                    <picture>
                                        <img src={features_icon2} alt="" />
                                    </picture>
                                </div>
                                <div>
                                    <h2 className=' text-[22px] text-primary font-bold font-Chivo mt-2'>
                                        Safely Security
                                    </h2>
                                    <h4 className=' text-[18px] font-DMSans text-primary mt-2'>
                                        All customer data is encrypted
                                    </h4>
                                </div>
                            </div>
                            <div className=' md:w-[40%]'>
                                <div>
                                    <picture>
                                        <img src={features_icon3} alt="" />
                                    </picture>
                                </div>
                                <div>
                                    <h2 className=' text-[22px] text-primary font-bold font-Chivo mt-2'>
                                        Fast and Easy to use
                                    </h2>
                                    <h4 className=' text-[18px] font-DMSans text-primary mt-2'>
                                        Easily to convert API with just a few clicks
                                    </h4>
                                </div>
                            </div>
                            <div className=' md:w-[40%]'>
                                <div className=' flex items-end h-full'>
                                    <button className=' text-[18px] font-DMSans text-white bg-[#3639A4] px-5 py-2 rounded-md'>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features