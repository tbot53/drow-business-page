import React from 'react'
import { TbArrowWaveRightUp } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCircle } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className='bg-black p-8 text-white overflow-x-hidden'>
      <section className='relative pb-12' >
        <h2 className='font-bold text-4xl text-center text-white'>Let's make something extraordinary</h2>

        <CiHeart className='text-amber-300 text-3xl rotate-45 w-fit absolute -bottom-10 left-[40%] ' size={"4.5rem"} strokeWidth={1.5} />
        <FaDotCircle  className="text-blue-400 text-3xl rotate-45 w-fit absolute -top-15 left-[40%]"
          size="3.5rem"/>
        <HiMiniComputerDesktop className='text-pink-500 text-3xl rotate-z-20 -rotate-x-30 w-fit absolute top-0 -right-10' size={"4.5rem"}/>
      </section>
      <hr className='border-1 border-b-gray-700' />
      <section className='py-6 flex flex-col space-y-4 text-lg font-semibold'>
        <ul className=' flex flex-col space-y-1 '>
          <li className='text-pink-500'>Services</li>
          <li>Website Rescue</li>
          <li>Webiste Care Plans</li>
          <li>Website Design</li>
        </ul>
        <ul className=' flex flex-col space-y-1 '>
          <li className='text-blue-400'>Clients</li>
          <li>Projects</li>
          <li>Work With Us</li>
          <li>Our Partners</li>
        </ul>
        <ul className=' flex flex-col space-y-1 '>
          <li className='text-amber-300'>Solutions</li>
          <li>Ecommerce</li>
          <li>Wordpress</li>
          <li>Accessibility</li>
        </ul>
      </section>
      <hr className='border-2 border-b-gray-700' />
      <section className='text-center pt-2'>
        <p>Created by <span>Jesubamiro Aduragbemi</span></p>
        <p>&copy; BamielDev, All rights reserved </p>
      </section>
    </footer>
  )
}

export default Footer