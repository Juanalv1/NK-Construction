import React from 'react'
import { FaCheckSquare } from "react-icons/fa";

const InfoCard2 = () => {
  return (
    <div className='flex flex-col justify-center p-4 rounded-lg shadow-xl gap-y-6 items-center bg-white px-8'>
      <FaCheckSquare className='w-10 h-10 text-red-500'/>
      <p className='text-[#747474]'>We believe in quality work as the most important factor. We also have 14 years of experience in concrete, being a company that is operated and directed by its owner and founder. We are a family owned company with a team of professionals who are committed in giving you high quality service. We follow security regulations and guarantee our projects to satisfy our clients needs.</p>
    </div>
  )
}

export default InfoCard2
