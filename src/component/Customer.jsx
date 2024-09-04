import React from 'react'
import Illustration from '../assets/Illustration.png'

const customer = () => {
    return (
        <section id='customer' className=' my-16'>
            <div className=' container bg-customerBanner bg-cover bg-no-repeat bg-center py-11 rounded-3xl md:px-0 px-2'>
                <div className=' md:flex gap-8 items-center'>
                    <div className=' md:w-6/12'>
                        <picture>
                            <img src={Illustration} alt="" />
                        </picture>
                    </div>
                    <div className=' md:w-6/12 text-white'>
                        <div>
                            <h2 className=' text-[44px] font-bold font-Chivo leading-none'>
                                Trusted by 35,000+ happy customers.
                            </h2>
                        </div>

                        <div className=' flex flex-wrap gap-x-4 md:mt-16 mt-5'>
                            <div>
                                <h2 className=' text-5xl font-extrabold font-Chivo'>
                                    720+
                                </h2>
                                <p className=' text-[18px] font-medium font-DMSans text-white'>
                                    Over 500 business powered with us
                                </p>
                            </div>
                            <div>
                                <h2 className=' text-5xl font-extrabold font-Chivo'>
                                    4.9
                                </h2>
                                <p className=' text-[18px] font-medium font-DMSans text-white'>
                                    Rating on google play and app store
                                </p>
                            </div>
                            <div>
                                <h2 className=' text-5xl font-extrabold font-Chivo'>
                                    200+
                                </h2>
                                <p className=' text-[18px] font-medium font-DMSans text-white'>
                                    Easily integrate with your favorite apps
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default customer