import {useState} from 'react'
import { MdOutlineSegment } from "react-icons/md";
import { MdClose } from "react-icons/md";
import './VerticalMarquee.css'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  function menuClick(){
    setMobileMenu(prev => !prev)
  }
  return (
    <header className='bg-black text-white font-bold  py-4 px-2 fixed w-full top-0 left-0 z-100 overflow-x-hidden '>
      <nav className='flex items-center justify-between'>
        <div className='flex space-x-4 items-center'>
          <div className=' items-center justify-center font-extrabold text-3xl md:text-6xl -rotate-z-3 rotate-y-3'>
            <span className='text-pink-500 text-shadow-right'>D</span>
            <span className='text-amber-300 text-shadow-right'>R</span>
            <span className='text-blue-300 text-shadow-right'>O</span>
            <span className='text-green-200 text-shadow-right'>W</span>
          </div>
          <nav className='text-3xl font-semibold hidden md:flex '>
            <ul className='flex space-x-4'>
              <li><a href="#service">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#project">Projects</a></li>
            </ul>
          </nav>

        </div>        
        <div>
          <button className='text-2xl flex md:hidden' onClick={menuClick}>
            {mobileMenu ? (<MdClose />) : (<MdOutlineSegment />)}            
          </button>
          <div className='text-2xl md:flex space-x-6 hidden'>
            <button className='border-b-2 border-gray-100'>Contact us</button>
            <button className=' text-black bg-white border-gray-300 py-2 px-4 rounded-4xl border-r-6 border-b-6 '>Book a Call</button>
          </div>
          
        </div>

      </nav>

      {mobileMenu && <nav className='text-3xl font-semibold pt-3 '>
        <ul className='flex flex-col space-y-4'>
          <li><a href="#service">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
        </ul>
      </nav>}
      
        
    </header>
  )
}

export default Header