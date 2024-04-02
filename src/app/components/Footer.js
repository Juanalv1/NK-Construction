import React from 'react'
import { LuFacebook, LuInstagram } from 'react-icons/lu'
import { MdFacebook } from 'react-icons/md'


const Footer = () => {
  return (
    <section className='bg-stone-500 flex flex-col justify-center items-center p-4' >
      <img src='/prueba.png' className='max-w-28'/>

      <div className='flex gap-x-4 mt-4'>
        <a href='https://www.facebook.com/profile.php?id=100068440527013'>
          <MdFacebook className='text-blue-600 w-6 h-6'/>
        </a>
        <a href='https://www.instagram.com/nk_construction.llc/'>
          <LuInstagram className=' text-red-500 w-6 h-6'/>
        </a>

      </div>
      <p className='mt-4'>Nk construction LLC All rights reserved</p>
    </section>
  )
}

export default Footer
