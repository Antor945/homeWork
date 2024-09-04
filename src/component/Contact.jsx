import React from 'react'

const Contact = () => {
    return (
        <section id='contact'>
            <div className=' container bg-contactShape bg-cover bg-no-repeat bg-center md:p-20 p-5 rounded-lg'>
                <div className=' md:flex items-center justify-between'>
                    <div className=' md:w-6/12'>
                        <h2 className=' text-white font-bold font-Chivo md:text-[46px] text-2xl leading-none
                         md:text-start text-center'>
                            Don’t find the answer? contact us for any query.
                        </h2>
                    </div>
                    <div className=' md:mt-0 mt-3 flex justify-center'>
                        <button className=' text-[18px] font-medium font-DMSans bg-[#43E7DF] px-12 py-4 rounded-md'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact