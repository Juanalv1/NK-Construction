import Image from 'next/image'
import InfoCard1 from './components/InfoCard1'
import InfoCard2 from './components/InfoCard2'
import InfoCard3 from './components/InfoCard3'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { Carousel } from "flowbite-react";
import Link from 'next/link'
export const metadata = {
  title: 'Nk construction | Concrete Construction service',
  description: 'Nk construction provides best concrete pumping service in Dallas',
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col scroll-smooth">
      <section className='flex relative bg-[url(/bg-prueba.jpg)] justify-center items-center bg-cover bg-center  lg:px-16 flex-col lg:flex-row py-6 lg:py-36 '>
        <div className='mx-6 text-black rounded-lg p-4  lg:w-1/2 text-center '>
          <div className='w-full h-full absolute top-0 right-0 bg-gray-900 opacity-50 rounded-lg z-10 '></div>
          <div className=' rounded-lg z-30 relative '>          
          <h1 className='lg:text-5xl text-4xl font-bold text-red-500 z-30'>Nk construction LLC</h1>
          <h2 className='lg:text-2xl text-lg text-red-500 font-bold z-20'>Concrete Construction service</h2>
          <p className='my-2 text-white z-20 lg:text-lg font-medium'>Welcome to Nk Construction LLC, your trusted partner for top-tier concrete services. With a commitment to excellence and a focus on customer satisfaction, we deliver superior results for projects of any scale. From residential renovations to commercial constructions.</p>
          {/* <div className='flex gap-x-4  items-center mt-4'>
            <IoLogoFacebook className='w-6 h-6 text-blue-600'/>
            <LuInstagram className='w-6 h-6 text-red-500'/>
          </div> */}
          <button className='bg-red-500 p-2 px-4 rounded-lg  text-white mt-2 z-20'><a href='#contact'>Contact us</a></button>
          <button className='bg-red-500 p-2 px-4 rounded-lg  text-white mt-2 ml-2 lg:ml-4 z-20'><a href='#work'>Our work</a></button>
</div>

        </div>

      </section>
      <section className='bg-white py-8 px-4' id='work'>
        <h1 className='text-red-500 text-2xl font-semibold text-center mb-4'>See our work</h1>
        <div className='grid lg:grid-cols-3 place-items-center gap-x-6 gap-y-8 text-white lg:px-12 lg:py-8 md:px-8 mb-8 lg:mb-0'>
            <Link className='relative hover:shadow-2xl cursor-pointer hover:border-2 border-solid border-red-500 rounded-lg lg:w-96 max-w-96 lg:h-72' href={'/works/driveways'}>
              <div className='absolute w-full h-full top-0 right-0 bg-gray-700 opacity-50 hover:opacity-0'></div>
              <img src='https://i.postimg.cc/prQH8LbB/driveways.webp' className='rounded-lg w-full h-full'/>
              <p className='absolute top-4 right-4 text-xl  font-semibold'>Driveways</p>
            </Link>
            <Link className='relative hover:shadow-2xl cursor-pointer hover:border-2 border-solid border-red-500 rounded-lg lg:w-96 max-w-96 lg:h-72' href={'/works/pool-decks'}>
            <div className='absolute w-full h-full top-0 right-0 bg-gray-700 opacity-50 hover:opacity-0'></div>
              <img src='https://i.postimg.cc/bNHnYxMZ/pool.jpg' className='rounded-lg w-full h-full'/>
              <p className='absolute top-4 right-4 text-xl  font-semibold '>Pool decks</p>
            </Link>
            <Link className='relative hover:shadow-2xl cursor-pointer hover:border-2 border-solid border-red-500 rounded-lg lg:w-96 max-w-96 lg:h-72' href={'/works/walk-ways'}>
            <div className='absolute w-full h-full top-0 right-0 bg-gray-700 opacity-50 hover:opacity-0'></div>
              <img src='https://i.postimg.cc/L8BGp7D7/walk-way.jpg' className='rounded-lg w-full h-full'/>
              <p className='absolute top-4 right-4 text-xl  font-semibold'>Walk ways</p>
            </Link>
          </div>
          <div className='grid lg:grid-cols-3 md-grid-cols- gap-x-6 gap-y-8 text-white lg:px-12 lg:py-8 md:px-8 place-content-center place-items-center'>
            <Link className='relative hover:shadow-2xl cursor-pointer hover:border-2 border-solid border-red-500 rounded-lg lg:w-96 max-w-96 lg:h-72' href={'/works/patios'}>
            <div className='absolute w-full h-full top-0 right-0 bg-gray-700 opacity-50 hover:opacity-0'></div>
              <img src='https://i.postimg.cc/L8BGp7D7/walk-way.jpg' className='rounded-lg w-full h-full'/>
              <p className='absolute top-4 right-4 text-xl  font-semibold'>Patios</p>
            </Link>
            <Link className='relative hover:shadow-2xl cursor-pointer hover:border-2 border-solid border-red-500 rounded-lg lg:w-96 max-w-96 lg:h-72' href={'/works/decorative-concrete'}>
            <div className='absolute w-full h-full top-0 right-0 bg-gray-700 opacity-50 hover:opacity-0'></div>
              <img src='https://i.postimg.cc/L8BGp7D7/walk-way.jpg' className='rounded-lg w-full h-full'/>
              <p className='absolute top-4 right-4 text-xl  font-semibold'>Decorative Concrete</p>
            </Link>
            <Link className='relative hover:shadow-2xl cursor-pointer hover:border-2 border-solid border-red-500 rounded-lg lg:w-96 max-w-96 lg:h-72' href={'/works/concrete-pumping'}>
            <div className='absolute w-full h-full top-0 right-0 bg-gray-700 opacity-50 hover:opacity-0'></div>
              <img src='https://i.postimg.cc/L8BGp7D7/walk-way.jpg' className='rounded-lg w-full h-full'/>
              <p className='absolute top-4 right-4 text-xl  font-semibold'>Concrete Pumping</p>
            </Link>
          </div>
      </section>
      <section className='bg-gray-200 py-12 px-4 '>
        <h2 className='text-red-500 font-semibold text-2xl mb-4  text-center'>About us
        </h2>
        <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6 lg:px-12'>
          <InfoCard1 />
          <InfoCard2 />
          <InfoCard3 />
        </div>
      </section>
      <section className='py-4 px-4 bg-white' id='contact'>
          <ContactSection />
      </section>
    </main>
  )
}
