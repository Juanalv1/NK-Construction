import React from 'react'

const ContactSection = () => {
  return (
    <div className='px-4 py-4 lg:px-28 rounded-lg py-8'>
      <h3 className='text-red-500 font-semibold text-2xl text-center mb-4'>Contact with us</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div className='flex flex-col gap-y-4 '>
          <p className='text-black text-lg'>If you are interested in our services or have any question, feel free to contact us via Phone or Email</p>
          <p className='text-black text-xl'>Call us at: <span className='text-red-500 font-medium'>(012) 345678</span></p>
          <p className='text-black  text-xl'>Email: <span className='text-red-500 font-medium'>nk92construction@gmail.com</span></p>
        </div>
        <img src='/contact.svg' className='w-96 h-80 flex lg:w-[450px] '/>
      </div>
    </div>
  )
}

export default ContactSection
