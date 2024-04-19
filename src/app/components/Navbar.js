"use client"
import { useRef, useState, useEffect } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const menuRef = useRef(null);
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  const handleOutsideClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      // Si se hace clic fuera del menú y el menú está abierto, ciérralo
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Agregar un listener para detectar clics en todo el documento
    document.addEventListener('mousedown', handleOutsideClick);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al montar el componente

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='flex px-4 items-center gap-x-2 border-b-red-500  border-solid justify-between lg:justify-normal top-0 right-0  bg-stone-500 lg:px-12 text-white '>
      <img src='https://i.postimg.cc/JhhdDJNZ/prueba.png' alt='logo' className='max-w-28 cursor-pointer' onClick={handleClick}/>
      <IoMenu className='w-12 h-12 text-[#f46868] lg:hidden flex' onClick={() => setIsMenuOpen(true)}/>
      {isMenuOpen && (
      <>
        <nav className='flex flex-col p-4 bg-[#747474] w-2/3 fixed top-0 right-0 z-40 h-full' ref={menuRef}>
          <IoClose className='self-end w-6 h-6 text-[#f46868]' onClick={() => setIsMenuOpen(false)} />
          <ul className='flex flex-col gap-y-2 mt-12'>
          <li className='hover:text-[#f46868]'><Link href={'/'} onClick={() => {
              setIsMenuOpen(false)
            }}>Home</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/works/driveways'} onClick={() => {
              setIsMenuOpen(false)
            }}>Driveways</Link></li>
            <li className='hover:text-[#f46868]' onClick={() => {
              setIsMenuOpen(false)
            }}><Link href={'/works/patios'} >Patios</Link></li>
            <li className='hover:text-[#f46868]' onClick={() => {
              setIsMenuOpen(false)
            }}><Link href={'/works/decorative-concrete'} >Decorative Concrete</Link></li>
            <li className='hover:text-[#f46868]' onClick={() => {
              setIsMenuOpen(false)
            }}><Link href={'/works/pool-decks'} >Pool decks</Link></li>
            <li className='hover:text-[#f46868]' onClick={() => {
              setIsMenuOpen(false)
            }}><Link href={'/works/walk-ways'} >Walk ways</Link></li>
            <li className='hover:text-[#f46868]' onClick={() => {
              setIsMenuOpen(false)
            }}><Link href={'/works/concrete-pumping'} >Concrete Pumping</Link></li>
          </ul>
          <button className='bg-[#f46868] p-2 rounded-lg mt-28 text-white'><a href='https://nkconstructionllc.com/#contact' onClick={() => {
              setIsMenuOpen(false)
            }}>Contact us</a></button>
        </nav>
        <div className='w-full absolute top-0 right-0 bg-black opacity-50 z-10 h-full'></div>
      </>
      )}
      <nav className='hidden lg:flex items-center w-full justify-between'>
        <ul className='flex gap-y-2 items-center ml-8 gap-x-4 '>
        <li className='hover:text-[#f46868]'><Link href={'/'} onClick={() => {
              setIsMenuOpen(false)
            }}>Home</Link></li>
        <li className='hover:text-[#f46868]'><Link href={'/works/driveways'}>Driveways</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/works/patios'}  onClick={() => {
              setIsMenuOpen(false)
            }}>Patios</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/works/decorative-concrete'}  onClick={() => {
              setIsMenuOpen(false)
            }}>Decorative Concrete</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/works/pool-decks'}  onClick={() => {
              setIsMenuOpen(false)
            }}>Pool decks</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/works/walk-ways'}  onClick={() => {
              setIsMenuOpen(false)
            }}>Walk ways</Link></li>
            <li className='hover:text-[#f46868]'><Link href={'/works/concrete-pumping'}  onClick={() => {
              setIsMenuOpen(false)
            }}>Concrete pumping</Link></li>
        </ul>
        <button className='bg-[#f46868] p-2 rounded-lg  text-white'><a href='https://nkconstructionllc.com/#contact' onClick={() => {
              setIsMenuOpen(false)
            }}>Contact us</a></button>
      </nav>
    </div>
  )
}

export default Navbar
