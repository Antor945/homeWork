import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { BsVirus } from "react-icons/bs";
import { IoIosArrowRoundForward } from 'react-icons/io';

const Services = () => {

    const data = [
        {
            icon: <FaComputer />,
            taitle: "Plan Product Roadmap",
            discription: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
            link: "dile vlw hoi"
        },
        {
            icon: <GoPeople />,
            taitle: "Plan Product Roadmap",
            discription: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
            link: "dile vlw hoi"
        },
        {
            icon: <FaComputer />,
            taitle: "Plan Product Roadmap",
            discription: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
            link: "dile vlw hoi"
        },
        {
            icon: <BsVirus />,
            taitle: "Plan Product Roadmap",
            discription: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
            link: "dile vlw hoi"
        }
    ]

    return (
        <section id='service' className=' mt-12'>
            <div className=' container md:px-0 px-3'>
                <div className=' text-center mb-10'>
                    <h2 className=' font-medium font-DMSans text-xl text-[#FF7364] mb-1'>
                        Our Services
                    </h2>
                    <h2 className=' text-[46px] font-Chivo font-bold text-primary'>
                        How It Works
                    </h2>
                </div>
                <div className=' md:flex md:gap-6'>
                    {
                        data.map((item) => (
                            <div className=' md:w-3/12 shadow-lg shadow-[#DCE7FE] rounded-lg p-7 group hover:bg-[#3639A4] duration-500 md:mb-20 mb-2'>
                                <div className=' p-5 bg-[#FAEAE8] group-hover:bg-white group-hover:text-black inline-block rounded-full mb-3 text-4xl text-[#ce7238]'>
                                    {item.icon}
                                </div>
                                <h2 className=' text-[22px] group-hover:text-white font-bold font-Chivo text-primary mb-2'>
                                    {item.taitle}
                                </h2>
                                <p className=' text-base font-DMSans text-primary group-hover:text-white'>
                                    {item.discription}
                                </p>
                                <div className=' flex items-center gap-x-3 text-base text-primary font-medium font-DMSans mt-5 group-hover:text-white'>
                                    <p>
                                        Read More
                                    </p>
                                    <IoIosArrowRoundForward />
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className=' flex justify-center'>
                    <button className=' outline-none border-[#3639A4] border-2 px-6 py-2 text-base font-Chivo rounded-md text-[#3639A4]'>
                        View More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Services