import React from 'react'
import shape from '../assets/shape.png'
import Frame1 from '../assets/Frame1.png'
import Frame2 from '../assets/Frame2.png'
import Frame3 from '../assets/Frame3.png'
import Frame4 from '../assets/Frame4.png'
import Frame5 from '../assets/Frame5.png'
import Frame6 from '../assets/Frame6.png'
import Frame7 from '../assets/Frame7.png'
import Frame8 from '../assets/Frame8.png'

const Integration = () => {
    return (
        <section id='Integration' className=' py-10 bg-[#F4FAFA]'>
            <div className='md:flex gap-x-10 container md:px-0 px-3'>
                <div className=' md:w-5/12'>
                    <h2 className=' text-xl font-DMSans font-medium text-[#FF7364]'>
                        Integrations
                    </h2>
                    <h3 className=' md:text-[46px] text-2xl leading-none font-bold text-primary font-Chivo'>
                        Easily integrate with your favorite apps
                    </h3>
                    <p className=' text-[18px] font-DMSans text-primary mt-3'>
                        App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.
                    </p>
                    <button className=' text-[18px] font-DMSans text-white bg-[#3639A4] px-5 py-2 rounded-md mt-7'>
                        Get Started
                    </button>
                </div>
                <div className=' md:w-7/12 md:relative'>
                    <div className='  justify-center md:block hidden'>
                        <img src={shape} alt="" className=' md:absolute md:h-full z-0  flex justify-center ' />
                    </div>
                    <div className=' flex flex-wrap gap-6  md:absolute z-10'>
                        <div className=' bg-white rounded-md md:px-8 px-3 md:py-4 py-1 inline-block'>
                            <picture>
                                <img src={Frame1} alt="" />
                            </picture>
                        </div>
                        <div className=' bg-white rounded-md md:px-8 px-3 md:py-4 py-1 inline-block'>
                            <picture>
                                <img src={Frame2} alt="" />
                            </picture>
                        </div>
                        <div className=' bg-white rounded-md md:px-8 px-3 md:py-4 py-1 inline-block'>
                            <picture>
                                <img src={Frame3} alt="" />
                            </picture>
                        </div>
                        <div className=' bg-white rounded-md md:px-8 px-3 md:py-4 py-1 inline-block'>
                            <picture>
                                <img src={Frame4} alt="" />
                            </picture>
                        </div>
                        <div className=' bg-white rounded-md md:px-8 px-3 md:py-4 py-1 inline-block'>
                            <picture>
                                <img src={Frame5} alt="" />
                            </picture>
                        </div>
                        <div className=' bg-white rounded-md px-8 py-4 inline-block'>
                            <picture>
                                <img src={Frame6} alt="" />
                            </picture>
                        </div>
                        <div className=' bg-white rounded-md px-8 py-4 inline-block'>
                            <picture>
                                <img src={Frame7} alt="" />
                            </picture>
                        </div>
                        <div className=' bg-white rounded-md px-8 py-4 inline-block'>
                            <picture>
                                <img src={Frame8} alt="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Integration