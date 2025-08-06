import React, { useEffect } from 'react';
import { TbArrowWaveRightUp } from 'react-icons/tb';
import { HiMiniComputerDesktop } from 'react-icons/hi2';
import { FaRegCircle } from 'react-icons/fa';
import shooter from './path-to-your-image.jpg';
import shooter2 from './path-to-your-second-image.jpg';
import halo from './path-to-your-third-image.jpg';

const HorizontalScrollSection = () => {
  useEffect(() => {
    const section = document.getElementById("horizontal-scroll");
    const wrapper = document.getElementById("scroll-wrapper");

    const handleScroll = () => {
      const isWide = window.innerWidth >= 768; // md breakpoint in Tailwind

      if (!isWide) {
        wrapper.style.transform = 'none';
        return;
      }

      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && Math.abs(rect.top) <= rect.height) {
        const scrollAmount = Math.min(rect.height, Math.abs(rect.top));
        wrapper.style.transform = `translateX(-${scrollAmount}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="horizontal-scroll"
      className="relative md:h-[100vh] overflow-visible"
    >
      <div
        id="scroll-wrapper"
        className="flex flex-col md:flex-row transition-transform duration-300 ease-linear md:h-[100vh] md:w-[400vw]"
      >

        {/* Strategy */}
        <div className='flex flex-col space-y-3 w-full md:w-[100vw] px-10 py-5'>
          <article>
            <h3 className='mb-2 mt-5 font-bold text-4xl md:text-6xl flex space-x-2 items-center '>
              <p>Strategy</p>
              <TbArrowWaveRightUp className='text-amber-300 pt-4' size={"4.5rem"} strokeWidth='3' />
            </h3>
            <p className='text-gray-400 md:text-2xl'>
              Ea sint deserunt occaecat proident qui. Aute voluptate qui irure aute ullamco mollit culpa occaecat id sint. Dolor eu voluptate labore id eu consequat cupidatat quis enim mollit ad in exercitation.
            </p>
            <div className='w-full md:w-120 h-72 rounded-xl pt-3'>
              <img src={shooter} alt="" className='h-full w-full object-cover rounded-xl' />
            </div>
          </article>
        </div>

        {/* Design */}
        <div className='flex flex-col space-y-3 w-full md:w-[100vw] px-10 py-5'>
          <article>
            <h3 className='mb-2 mt-5 font-bold text-4xl md:text-6xl flex space-x-2 items-center '>
              <p>Design</p>
              <HiMiniComputerDesktop className='text-pink-400 pt-4' size={"4.5rem"} />
            </h3>
            <p className='text-gray-400 md:text-2xl'>
              Ea sint deserunt occaecat proident qui. Aute voluptate qui irure aute ullamco mollit culpa occaecat id sint. Dolor eu voluptate labore id eu consequat cupidatat quis enim mollit ad in exercitation.
            </p>
            <div className='w-full md:w-120 h-72 rounded-xl pt-3'>
              <img src={shooter2} alt="" className='h-full w-full object-cover rounded-xl' />
            </div>
          </article>
        </div>

        {/* Build */}
        <div className='flex flex-col space-y-3 w-full md:w-[100vw] px-10 py-5'>
          <article>
            <h3 className='mb-2 mt-5 font-bold text-4xl md:text-6xl flex space-x-2 items-center '>
              <p>Build</p>
              <FaRegCircle className='text-blue-300 pt-4 rotate-45 ' size={"4.5rem"} />
            </h3>
            <p className='text-gray-400 md:text-2xl'>
              Ea sint deserunt occaecat proident qui. Aute voluptate qui irure aute ullamco mollit culpa occaecat id sint. Dolor eu voluptate labore id eu consequat cupidatat quis enim mollit ad in exercitation.
            </p>
            <div className='w-full md:w-120 h-72 rounded-xl pt-3'>
              <img src={shooter2} alt="" className='h-full w-full object-cover rounded-xl' />
            </div>
          </article>
        </div>

        {/* Maintain */}
        <div className='flex flex-col space-y-3 w-full md:w-[100vw] px-10 py-5'>
          <article>
            <h3 className='mb-2 mt-5 font-bold text-4xl md:text-6xl flex space-x-6 items-center '>
              <p>Maintain</p>
              <div className='text-green-300 rotate-30'>X</div>
            </h3>
            <p className='text-gray-400 md:text-2xl'>
              Ea sint deserunt occaecat proident qui. Aute voluptate qui irure aute ullamco mollit culpa occaecat id sint. Dolor eu voluptate labore id eu consequat cupidatat quis enim mollit ad in exercitation.
            </p>
            <div className='w-full md:w-120 h-72 rounded-xl pt-3'>
              <img src={halo} alt="" className='h-full w-full object-cover rounded-xl' />
            </div>
          </article>
        </div>

      </div>
    </section>
  );
};

export default HorizontalScrollSection;
