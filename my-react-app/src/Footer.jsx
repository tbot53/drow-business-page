import React from 'react'
import './VerticalMarquee.css'
import { TbArrowWaveRightUp } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCircle } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className='bg-black p-8 text-white overflow-x-hidden md:h-[120vh] md:p-12'>
      <section className='relative pb-12' >
        <h2 className='font-bold text-4xl text-center text-white md:text-7xl md:font-extrabold'>Let's make something extraordinary</h2>

        <CiHeart className='text-amber-300 text-3xl rotate-45 w-fit absolute -bottom-10 left-[40%] ' size={"4.5rem"} strokeWidth={1.5} />
        <FaDotCircle  className="text-blue-400 text-3xl rotate-45 w-fit absolute -top-15 left-[40%]"
          size="3.5rem"/>
        <HiMiniComputerDesktop className='text-pink-500 text-3xl rotate-z-20 -rotate-x-30 w-fit absolute top-0 -right-10' size={"4.5rem"}/>
      </section>
      <hr className='border-1 border-b-gray-700' />
      <section className='py-6 grid grid-cols-1 md:grid-cols-4 gap-2 md:text-3xl text-lg font-semibold md:py-18'>
        <div className='md:flex items-center justify-center font-extrabold hidden text-6xl -rotate-z-3 rotate-y-3'>
          <span className='text-pink-500 text-shadow-right'>D</span>
          <span className='text-amber-300 text-shadow-right'>R</span>
          <span className='text-blue-300 text-shadow-right'>O</span>
          <span className='text-green-200 text-shadow-right'>W</span>
        </div>
        <ul className=' flex flex-col space-y-1 md:space-y-4'>
          <li className='text-pink-500'>Services</li>
          <li>Website Rescue</li>
          <li>Webiste Care Plans</li>
          <li>Website Design</li>
        </ul>
        <ul className=' flex flex-col space-y-1 md:space-y-4'>
          <li className='text-blue-400'>Clients</li>
          <li>Projects</li>
          <li>Work With Us</li>
          <li>Our Partners</li>
        </ul>
        <ul className=' flex flex-col space-y-1 md:space-y-4 '>
          <li className='text-amber-300'>Solutions</li>
          <li>Ecommerce</li>
          <li>Wordpress</li>
          <li>Accessibility</li>
        </ul>
      </section>
      <hr className='border-2 border-b-gray-700' />
      <section className='text-gray-300 text-center pt-2 flex flex-col md:flex-row md:items-center md:justify-between md:pt-4 md:text-xl'>
        <p>Created by <span>Jesubamiro Aduragbemi</span></p>
        <p>&copy; BamielDev, All rights reserved </p>
      </section>
    </footer>
  )
}

export default Footer