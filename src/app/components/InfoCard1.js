import React from 'react'
import { MdConstruction } from "react-icons/md";

const InfoCard1 = () => {
  return (
    <div className='flex flex-col justify-center p-4 rounded-lg shadow-xl gap-y-6 items-center bg-white px-6'>
      <MdConstruction className='w-10 h-10 text-red-500'/>
      <p className='text-[#747474]'>For starters, we’re smart, quick, reliable, honest, friendly and so darn good at what we do. We don’t just focus on your immediate problem. We always dig deeper to find and fix any underlying issues, too. This approach results in long-term solutions and satisfied customers!. As a company we are proud of our team work, integrity, professionalism and honesty to create a balance between quality and cost.</p>
    </div>
  )
}

export default InfoCard1
