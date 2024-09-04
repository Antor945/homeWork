import React from 'react'
import { FaRegUser } from 'react-icons/fa6';
import { TiTick } from "react-icons/ti";



const Pricing = () => {


    const data = [
        {
            icon: <FaRegUser />,
            status: "Personal",
            price: "10",
            discount: "40",
            support: [
                "Calendar View",
                "Custom Templates",
                "list view",
                "board view",
                "Assignees & Due Dates"
            ]
        },
        {
            icon: <FaRegUser />,
            status: "Team",
            price: "25",
            discount: "35",
            support: [
                "Timeline Review",
                "Custom fields",
                "Custom Templates",
                "Task dependencies",
                "Milestones Manage"
            ]
        },
        {
            icon: <FaRegUser />,
            status: "Personal",
            price: "10",
            discount: "40",
            support: [
                "Data export & deletion",
                "Block native integrations",
                "Custom branding",
                "Lock custom fields",
                "Priority support"
            ]
        }
    ]

    return (
        <section id='Pricing' className=' container my-10 md:px-0 px-3'>
            <div className=' flex justify-center'>
                <div className=' md:w-6/12'>
                    <h2 className=' md:text-[46px] text-2xl leading-none font-Chivo font-bold text-primary text-center mb-3'>
                        Pricing Designed To Fit Your Business
                    </h2>
                </div>
            </div>
            <div className=' flex justify-center mb-10'>
                <div className=' md:w-3/12'>
                    <div className=' flex gap-4'>
                        <h2 className=' md:text-3xl text-2xl font-Chivo font-bold text-[#3639A4]'>
                            Monthly
                        </h2>
                        <div className=' bg-[#3639A4] rounded-3xl p-2 w-20'>
                            <div className=' w-5 h-5 rounded-full bg-white'>
                            </div>
                        </div>
                        <h2 className=' md:text-3xl text-2xl font-Chivo font-bold text-[#645E76]'>
                            Yearly
                        </h2>
                    </div>
                </div>
            </div>
            <div className='md:flex gap-x-6'>
                {
                    data.map((item) => (
                        <div className=' md:w-4/12 p-10 shadow-2xl group hover:bg-[#3639A4] duration-500 rounded-2xl  md:mb-0 mb-5'>
                            <div className=' flex flex-col justify-center items-center text-center'>
                                <div className='p-4 bg-[#1fbde93a] group-hover:bg-white rounded-full mb-6'>
                                    <FaRegUser className=' text-3xl text-[#00c8ff] group-hover:text-[#3639A4]' />
                                </div>
                                <div className='text-center'>
                                    <h2 className=' text-2xl font-Chivo font-bold text-[#3639A4] group-hover:text-[#43E7DF]'>
                                        Personal
                                    </h2>
                                    <h2 className=' text-[44px] text-primary font-bold mb-1 group-hover:text-white'>
                                        $10/mth
                                    </h2>
                                    <p className=' text-[18px] text-[#645E76] font-Chivo font-medium group-hover:text-white'>Annual pricing
                                        <span className=' text-[#3639A4] group-hover:text-[#43E7DF]'>
                                            (save 20%)
                                        </span> </p>
                                </div>
                            </div>
                            <div className=' mt-4 text-[#645E76] text-[18px] font-DMSans font-medium'>
                                {
                                    item.support.map((item) => (
                                        <div className=' flex items-center gap-x-3 mb-3'>
                                            <TiTick className=' text-[#3639A4] bg-[#363aa448] group-hover:bg-white rounded-full' />
                                            <p className='group-hover:text-white'>
                                               {item}
                                            </p>
                                        </div>
                                    ))
                                }

                             
                            </div>
                            <button className=' bg-[#3639A4] group-hover:bg-[#43E7DF] group-hover:text-primary font-DMSans text-[18px] font-medium
                             text-white w-full mt-6 py-3 rounded-md'>
                                Purchase Now
                            </button>
                        </div>
                    ))

                }

            </div>
        </section>
    )
}

export default Pricing




   {/* <div className=' flex items-center gap-x-3 mb-3'>
                                    <TiTick className=' text-[#3639A4] bg-[#363aa448] group-hover:bg-white rounded-full' />
                                    <p className='group-hover:text-white'>
                                        Calendar View
                                    </p>
                                </div>
                                <div className=' flex items-center gap-x-3 mb-3'>
                                    <TiTick className=' text-[#3639A4] bg-[#363aa448] group-hover:bg-white rounded-full' />
                                    <p className='group-hover:text-white'>
                                        Custom Templates
                                    </p>
                                </div>
                                <div className=' flex items-center gap-x-3 mb-3'>
                                    <TiTick className=' text-[#3639A4] bg-[#363aa448] group-hover:bg-white rounded-full' />
                                    <p className='group-hover:text-white'>
                                        list view
                                    </p>
                                </div>
                                <div className=' flex items-center gap-x-3 mb-3'>
                                    <TiTick className=' text-[#3639A4] bg-[#363aa448] group-hover:bg-white rounded-full' />
                                    <p className='group-hover:text-white'>
                                        board view
                                    </p>
                                </div>
                                <div className=' flex items-center gap-x-3 mb-3'>
                                    <TiTick className=' text-[#3639A4] bg-[#363aa448] group-hover:bg-white rounded-full' />
                                    <p className='group-hover:text-white'>
                                        Assignees & Due Dates
                                    </p>
                                </div> */}