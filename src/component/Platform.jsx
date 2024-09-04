import React from 'react'
import layer1 from '../assets/layer1.png'


const data = [
    {
        img: "https://i.ibb.co/wWcTVcX/layer1.png",
        taitle: "Login or sign up to be able use our platform",
        description: "This quickstart shows you how to use Identity Platform to sign in a user with an email and password. "
    },
    {
        img: "https://i.ibb.co/7b1wyRZ/layer2.png",
        taitle: "Connect your website with just a few click",
        description: "Once your website is online, you can configure it, I will show you how to put your website online"
    },
    {
        img: "https://i.ibb.co/qp2NnBm/layer3.png",
        taitle: "Take some sales data that you want",
        description: "Sell your data directly: The most straightforward method is to sell your data directly to another."
    }
]

const Platform = () => {
    return (
        <section id='platform' className=' container mb-10'>
            <div className=' md:w-5/12 z-[-1] md:-translate-y-32 md:absolute'>
                <h2 className=' md:block hidden md:text-[46px] font-bold text-primary font-Chivo md:mt-0 mt-16 md:text-start
                 text-center'>
                    How simple is it to use our platform?
                </h2>
                <h2 className=' md:hidden text-3xl font-bold text-primary font-Chivo md:mt-0 mt-16 md:text-start
                 text-center mb-4'>
                    How simple is it to use our platform?
                </h2>
            </div>
            <div className='md:flex justify-between'>
                {
                    data.map((item) => (
                        <div className="md:w-3/12">
                            <div className="flex justify-center mb-3">
                                <picture>
                                    <img src={item.img} alt="" />
                                </picture>
                            </div>
                            <h2 className="text-2xl font-Chivo font-bold text-primary text-center">
                                {item.taitle}
                            </h2>
                            <p className="font-Chivo text-[18px] text-primary text-center mt-1">
                                {item.description}
                            </p>
                        </div>
                    ))
                }


            </div>
        </section>
    )
}

export default Platform