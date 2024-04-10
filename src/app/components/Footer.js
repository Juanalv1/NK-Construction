import React from 'react'
import { IoCall, IoLogoTiktok, IoPhoneLandscape } from 'react-icons/io5'
import { LuFacebook, LuInstagram } from 'react-icons/lu'
import { MdFacebook } from 'react-icons/md'


const Footer = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 p-4 text-gray-700 py-8 flex-col bg-gray-200 md:flex-row lg:px-28' >
      <div className='text-center'>
        <p>Lenyn Henriquez Torres </p>
        <p>Call or text</p>
        <p className='flex justify-center items-center gap-x-1'><IoCall/> (704) 6005487</p>
        <p>Dallas NC 28034</p>
      </div>
      <div className='text-center'>
        <p className='mt-4 px-4 text-gray-500'>Nk construction LLC All rights reserved</p>
        <p className=''>Made by <a href='https://portfolio-three-chi-15.vercel.app/' className='text-red-500 font-medium hover:underline'>Juan Alvarado</a></p>
      </div>

      <div className='flex flex-col justify-center items-center '>
      <p className='text-center'>Follow us on:</p> 
      <div className='flex gap-x-4 items-center justify-center mt-2'>
        <a href='https://www.facebook.com/profile.php?id=100068440527013'>
            <MdFacebook className='text-blue-600 w-6 h-6'/>
          </a>
          <a href='https://www.instagram.com/nk_construction.llc/'>
            <LuInstagram className=' text-red-500 w-6 h-6'/>
          </a>
          <a href='https://www.tiktok.com/@nk_construction?_t=8lN2wqMYqrq&_r=1'>
            <IoLogoTiktok className=' text-red-500 w-6 h-6'/>
          </a>
      </div>

      </div>
    </section>
  )
}

export default Footer
