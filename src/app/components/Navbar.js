"use client"

import React, { useState } from 'react'
import { IoClose, IoMenu } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='flex px-4 py-2 items-center gap-x-2 border-b-red-500  border-solid justify-between lg:justify-normal relative top-0 right-0  bg-stone-500 lg:px-12'>
      <img src='/prueba.png' className='max-w-28'/>
      <IoMenu className='w-12 h-12 text-[#f46868] lg:hidden flex' onClick={() => setIsMenuOpen(true)}/>
      {isMenuOpen && (
      <>
        <nav className='flex flex-col p-4 bg-[#747474] w-2/3 absolute top-0 right-0 z-40 h-screen'>
          <IoClose className='self-end w-6 h-6 text-[#f46868]' onClick={() => setIsMenuOpen(false)} />
          <ul className='flex flex-col gap-y-2 mt-12'>
            <li className='hover:text-[#f46868]'><Link href={'/driveways'}>Driveways</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/patios'}>Patios</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/decorative-concrete'}>Decorative Concrete</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/pool-decks'}>Pool decks</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/walk-ways'}>Walk ways</Link></li>
          </ul>
          <button className='bg-[#f46868] p-2 rounded-lg mt-28'>Contact us</button>
        </nav>
        <div className='w-full absolute top-0 right-0 bg-black opacity-50 z-10 h-screen'></div>
      </>
      )}
      <nav className='hidden lg:flex items-center w-full justify-between'>
        <ul className='flex gap-y-2 items-center ml-8 gap-x-4 '>
        <li className='hover:text-[#f46868]'><Link href={'/driveways'}>Driveways</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/patios'}>Patios</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/decorative-concrete'}>Decorative Concrete</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/pool-decks'}>Pool decks</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/walk-ways'}>Walk ways</Link></li>
        </ul>
        <button className='bg-[#f46868] p-2 rounded-lg  hover:shadow-lg hover:border-dotted'>Contact us</button>
      </nav>
    </div>
  )
}

export default Navbar
