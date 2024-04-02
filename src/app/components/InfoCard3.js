import React from 'react'
import { GiConcreteBag } from "react-icons/gi";


const InfoCard3 = () => {
  return (
    <div className='flex flex-col justify-center p-4 rounded-lg shadow-xl gap-y-6 items-center bg-white px-8'>
      <GiConcreteBag className='w-10 h-10 text-red-500'/>
      <p className='text-[#747474]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit tempor ex. Duis sed urna varius, hendrerit quam vitae, vehicula orci. Praesent lacinia ex non risus rutrum, id convallis odio tincidunt. Proin ultricies massa nec egestas pulvinar. Etiam nunc justo, egestas eu orci ut, dapibus euismod nulla.</p>
    </div>
  )
}

export default InfoCard3
