import React from 'react'
import { MdOutlineSegment } from "react-icons/md";

const Header = () => {
  return (
    <header className='bg-black text-white font-bold flex items-center justify-between py-4 px-2 fixed w-full top-0 left-0 z-100 overflow-x-hidden'>
        <p>GROW</p>
        <nav>
            <button className='text-2xl'>
              <MdOutlineSegment />
            </button>
        </nav>
        
    </header>
  )
}

export default Header