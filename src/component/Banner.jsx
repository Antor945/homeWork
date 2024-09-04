import React from 'react'
import laptop from '../assets/Laptop.png'

const Banner = () => {
  return (
    <section id='banner' className=' bg-banner bg-no-repeat bg-cover object-cover bg-center w-full translate-y-[-20px]'>
      <div className="container relative">
        <div className="md:flex justify-center pt-20">
          <div className="md:w-7/12 text-center leading-none">
            <h2 className="md:text-[56px] text-2xl font-bold text-white font-Chivo mt-10">
              Get your work done with Management Tool
            </h2>
            <p className="text-[18px] text-white font-DMSans mt-5">
              The world's first project management platform that <br /> connects everything
            </p>
          </div>
        </div>
        <div className="md:flex justify-center md:pb-[500px] pb-24 mt-10 relative">
          <div className="md:w-5/12">
            <div className="md:bg-white md:flex justify-between items-center px-3 rounded-md">
              <div>
                <input
                  type="email"
                  placeholder="Your business email"
                  className="text-base font-Chivo text-primary outline-none md:p-0 p-4 w-full rounded-md"
                />
              </div>
              <button className="text-[18px] font-DMSans font-medium bg-secoundery px-4 py-2 my-2 rounded-md w-full md:w-auto">
                Try for free
              </button>
            </div>
          </div>
          <div className="absolute md:w-8/12 md:top-[200px]">
            <img src={laptop} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner


// How simple is it to use our platform?