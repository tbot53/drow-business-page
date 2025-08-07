import {useState} from 'react'
import Marquee from "react-fast-marquee";
import './VerticalMarquee.css'
import { TbArrowWaveRightUp } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaRegCircle } from "react-icons/fa";
import car from './assets/img/gran-turismo.jpg'
import shooter from './assets/img/shooter-1.jpg'
import shooter2 from './assets/img/shooter-2.jpg'
import halo from './assets/img/halo.jpg'

const Body = () => {

    const images = [shooter2, car, shooter];
    const directions = ["up", "down", "up"];
    const pointInfo = [
        {
            title: "Streamlined, timesaving process",
            subtitle: "Fugiat sint irure culpa exercitation tempor laborum.Lorem culpa amet et voluptate eu minim.Excepteur qui do ea tempor.Mollit consectetur exercitation adipisicing pariatur aliqua in.",
            icon:<HiMiniComputerDesktop/>,
            deg: 5

        },
        {
            title: "Bloated free zone",
            subtitle: "Fugiat sint irure culpa exercitation tempor laborum.Lorem culpa amet et voluptate eu minim.Excepteur qui do ea tempor.Mollit consectetur exercitation adipisicing pariatur aliqua in.",
            icon:<FaRegCircle/>,
            deg: 355


        },
        {
            title: "Ongoing support crew",
            subtitle: "Fugiat sint irure culpa exercitation tempor laborum.Lorem culpa amet et voluptate eu minim.Excepteur qui do ea tempor.Mollit consectetur exercitation adipisicing pariatur aliqua in.",
            icon:<TbArrowWaveRightUp/>,
            deg: 3
        },
        {
            title: "Built for non-tech teams",
            subtitle: "Fugiat sint irure culpa exercitation tempor laborum.Lorem culpa amet et voluptate eu minim.Excepteur qui do ea tempor.Mollit consectetur exercitation adipisicing pariatur aliqua in.",
            icon:<HiMiniComputerDesktop/>,
            deg: 0

        },

    ]
  return (
    <main className='overflow-x-hidden'>
        <section className="  relative  mt-10 p-8 z-10 md:h-[70vh] md:flex md:items-center md:justify-center">
            <div className="flex flex-col space-y-2 items-center justify-center text-center py-3 px-8 ">
                <p className="font-bold text-4xl">O</p>
                <p className="font-bold text-3xl md:text-7xl md:pb-2">
                Websites built to <span className="underline decoration-amber-300">grow your business</span>
                </p>
                <p className='text-md md:text-2xl'>For marketing and small businesses, who want better results without blowing the budget</p>
                <div className="w-fit p-2 px-4 bg-amber-300 border-2 border-r-6 border-b-6 border-black rounded-4xl text-xl shadow-2xl md:text-2xl">
                <a href="#">Book a call to get started</a>
                </div>
            </div>
        </section>
        <section className="flex space-x-1 md:h-[75vh] h-96 w-full overflow-hidden bg-black inward-curve-top">
            {directions.map((direction, index) => (
                <div key={index} className="w-1/3 h-full overflow-hidden relative">
                <div className={`marquee-container ${direction === 'down' ? 'scroll-down' : 'scroll-up'}`}>
                    <div className="marquee-content">
                    {images.map((img, idx) => (
                        <img key={idx} src={img} alt="" className="marquee-image" />
                    ))}
                    {images.map((img, idx) => (
                        <img key={`dupe-${idx}`} src={img} alt="" className="marquee-image" />
                    ))}
                    </div>
                </div>
                </div>
            ))}
        </section>
        <section id='service' className="flex flex-col space-y-2 items-center justify-center  p-8 md:p-12 md:h-[60vh] md:text-center">
            <h2 className='font-bold text-3xl md:text-8xl md:p-6'>We are the website <span className="underline decoration-amber-300">growth partners</span> you've been looking for </h2>
            <p className=' md:text-2xl'>Aute exercitation ea deserunt anim id dolor magna aliquip. Pariatur nisi tempor deserunt labore consequat commodo ad. Ad ipsum reprehenderit incididunt sit cupidatat magna id ea. Eiusmod adipisicing cupidatat et excepteur. Excepteur nisi consequat ullamco sunt elit.</p>
        </section>

        <section id='project' className='p-8 bg-gray-200 text-center flex flex-col space-y-3 md:flex-row md:space-y-0 md:items-center md:justify-between md:p-12 md:h-96'>
            <div>
                <h3 className='font-bold text-3xl md:text-8xl'>400+</h3>
                <p className='text-xl md:text-3xl'>Websites Built</p>
            </div>
            <div>
                <h3 className='font-bold text-3xl md:text-8xl'>26yrs</h3>
                <p className='text-xl md:text-3xl'>Combined Experience</p>
            </div>
            <div>
                <h3 className='font-bold text-3xl md:text-8xl'>90+</h3>
                <p className='text-xl md:text-3xl'>5 Star Reviews</p>
            </div>
        </section>

        <section  className='bg-[#191618] p-8 text-white'>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <p className='text-amber-300'>Our superpower?</p>
                <p>Making it as easy as possible for you</p>
            </h2>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <article >
                    <h3 className='mb-2 mt-5 font-bold text-4xl md:text-6xl flex space-x-2 items-center '>
                        <p>Strategy</p>
                        <TbArrowWaveRightUp className='text-amber-300 pt-4' size={"4.5rem"}  strokeWidth='3' />
                        
                        
                    </h3>
                    <p className='text-gray-400 md:text-2xl'>Ea sint deserunt occaecat proident qui. Aute voluptate qui irure aute ullamco mollit culpa occaecat id sint. Dolor eu voluptate labore id eu consequat cupidatat quis enim mollit ad in exercitation.</p>
                    <div className='w-full md:w-120 h-72 rounded-xl pt-3'>
                        <img src={shooter} alt="" className='h-full w-full object-cover rounded-xl' />
                    </div>
                </article>

                <article >
                    <h3 className='mb-2 mt-5 font-bold text-4xl md:text-6xl flex space-x-2 items-center '>
                        <p>Design</p>
                        <HiMiniComputerDesktop className='text-pink-400 pt-4 -rotate-x-30 -rotate-y-45 ' size={"4.5rem"}  />
                        
                        
                    </h3>
                    <p className='text-gray-400 md:text-2xl'>Ea sint deserunt occaecat proident qui. Aute voluptate qui irure aute ullamco mollit culpa occaecat id sint. Dolor eu voluptate labore id eu consequat cupidatat quis enim mollit ad in exercitation.</p>
                    <div className='w-full md:w-120 h-72 rounded-xl pt-3'>
                        <img src={shooter2} alt="" className='h-full w-full object-cover rounded-xl' />
                    </div>
                </article>
                <article >
                    <h3 className='mb-2 mt-5 font-bold text-4xl md:text-6xl flex space-x-2 items-center '>
                        <p>Build</p>
                        <FaRegCircle className='text-blue-300 pt-4 rotate-45 ' size={"4.5rem"}  />
                        
                        
                    </h3>
                    <p className='text-gray-400 md:text-2xl'>Ea sint deserunt occaecat proident qui. Aute voluptate qui irure aute ullamco mollit culpa occaecat id sint. Dolor eu voluptate labore id eu consequat cupidatat quis enim mollit ad in exercitation.</p>
                    <div className='w-full md:w-120 h-72 rounded-xl pt-3'>
                        <img src={shooter2} alt="" className='h-full w-full object-cover rounded-xl' />
                    </div>
                </article>
                <article className='pt-4'>
                    <h3 className='mb-2 mt-5 font-bold text-4xl md:text-6xl flex space-x-6 items-center '>
                        <p>Maintain</p>
                        <div className='text-green-300  rotate-30  '  >X</div>
                        
                        
                    </h3>
                    <p className='text-gray-400 md:text-2xl'>Ea sint deserunt occaecat proident qui. Aute voluptate qui irure aute ullamco mollit culpa occaecat id sint. Dolor eu voluptate labore id eu consequat cupidatat quis enim mollit ad in exercitation.</p>
                    <div className='w-full md:w-120 h-72 rounded-xl pt-3'>
                        <img src={halo} alt="" className='h-full w-full object-cover rounded-xl' />
                    </div>
                </article>

            </div>
        
        </section>


        <section className='bg-amber-300 p-8 md:h-[100vh] md:p-12'>
            <h2 className='text-4xl md:text-6xl font-bold mb-6'>Our point of difference</h2>
            <div className='flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-8 md:items-center md:justify-center'>
                {pointInfo.map((points, index)=>{
                    return(
                       <article key={index} className={`border-2 border-black p-4 bg-white rounded-lg shadow-xl md:w-72 md:h-contain border-r-6 border-b-6`} style={{ transform: `rotate(${points.deg}deg)` }}>
                            <h3 className='font-bold text-2xl md:text-4xl'>{points.title}</h3>
                            <p className='md:text-xl'>{points.subtitle}</p>
                            <p className='text-green-500 text-3xl rotate-45 w-fit' size={"4.5rem"} >{points.icon}</p>

                        </article>
                    )
                })}
            </div>

        </section>
        <section id='about' className='p-8 bg-[#F8FEFF] flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-3  md:justify-between'>
            <div className='h-96 w-[80vw] md:w-1/3 border-8 border-gray-200 shadow-md -rotate-4' >
                <img src={halo} alt=""  className='h-full w-full object-cover'/>
            </div>
            <div className='pt-4 flex flex-col space-y-3 md:w-1/3 md:px-2' >
                <h3 className='font-bold text-4xl md:text-7xl'>We grow Businesses</h3>
                <div className='flex flex-col space-y-3 md:text-2xl'>
                    <p>Sint laboris sint cupidatat amet ad nisi eu incididunt aute aliqua deserunt duis sint.Consectetur duis irure culpa exercitation culpa dolore nisi proident id laboris consectetur.</p>
                    <p>Irure officia non ad dolor eu aute veniam commodo velit mollit dolore culpa cillum.Consequat anim nisi dolore exercitation veniam excepteur duis non ad do in occaecat nulla culpa.</p>
                    <p>Consectetur non anim eiusmod qui dolor ea magna tempor aliqua.Amet veniam magna officia reprehenderit nostrud in adipisicing eu consectetur dolor.</p>

                </div>
                <button className='w-fit px-4 py-2 bg-amber-300 border-2 border-r-6 border-b-6 border-black font-semibold rounded-3xl md:text-2xl'>Meet the team</button>
                
            </div>
            <div className='h-96 w-[80vw] md:w-1/3 border-8 border-gray-200 shadow-md rotate-4 mt-4' >
                <img src={car} alt=""  className='h-full w-full object-cover'/>
            </div>

        </section>
        <section className='p-8 bg-pink-500 text-white flex flex-col space-y-2 justify-center items-center md:h-[75vh] md:p-12 md:space-y-4'>
            <p className='font-semibold text-2xl text-center md:text-6xl'>Eiusmod laboris laboris sint nulla aliqua ad exercitation elit. Fugiat sint magna eiusmod amet anim. Nisi est cupidatat adipisicing veniam velit officia culpa non do.</p>
            <button className='w-fit px-3 py-2 rounded-4xl border-2 border-r-6 border-b-6 border-black bg-white text-black md:text-xl md:font-semibold md:px-6'> We would love to work with you too</button>

        </section>
    </main>
  )
}

export default Body