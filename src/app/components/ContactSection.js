"use client"
import {useState, useEffect} from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import SuccessMesssage from './SuccessMessage'


const ContactSection = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    watch, reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const req = await fetch('/api/v1/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const res = await req.json()
    if (res) {
      setIsSuccess(true)
      reset()
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000);
    }
    console.log(res)
  }


  return (
    <div className='px-4 lg:px-52 xl:px-72 md:px-28 rounded-lg bg-[url(https://i.postimg.cc/RFb1r2Yb/img.jpg)] bg-cover bg-center relative py-16 '>
      <div className='w-full h-full absolute top-0 right-0 bg-gray-900 opacity-50 rounded-lg z-10 '></div>
      <div className='z-20 relative w-full h-full'>
      <h3 className='text-red-500 font-bold text-3xl text-center mb-4'>Contact us</h3>
      {isSuccess && (<SuccessMesssage text={'Formulario enviado exitosamente'}/>)}
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-black'>
        <label className='text-white'>Name</label>
        {errors.name && (<p className='text-xs text-red-500 my-1'>This field is required</p>)}
        <input type='text' {...register('name', { required: true })} placeholder='Name...' className='mb-4 rounded'/>
        <label className='text-white'>Email</label>
        {errors.email && (<p className='text-xs text-red-500 my-1'>This field is required</p>)}
        <input type='text' {...register('email', { required: true })} placeholder='Email...' className='mb-4 rounded'/>
        <label className='text-white'>Phone number</label>
        {errors.phone_number && (<p className='text-xs text-red-500 my-1'>This field is required</p>)}
        <input type='text' {...register('phone_number', { required: true })} placeholder='Phone number...' className='mb-4 rounded'/>
        <label className='text-white'>Short description about your project</label>
        {errors.description && (<p className='text-xs text-red-500 my-1'>This field is required</p>)}
        <textarea type='text' {...register('description', { required: true })} placeholder='Tell us about your project' className='mb-4 h-44 rounded'/>
        <input type='submit' className='bg-red-500 text-white px-2 py-2 rounded text-lg mt-2 cursor-pointer hover:bg-red-600' value={'Send'}/>
      </form>
      </div>
    </div>
  )
}

export default ContactSection

      {/* <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div className='flex flex-col gap-y-4 '>
          <p className='text-black text-lg'>If you are interested in our services or have any question, feel free to contact us via Phone or Email</p>
          <p className='text-black text-xl'>Call us at: <span className='text-red-500 font-medium'>(704) 6005487</span></p>
          <p className='text-black  text-xl'>Email: <span className='text-red-500 font-medium'>nk92construction@gmail.com</span></p>
        </div>
        <img src='/contact.svg' className='w-96 h-80 flex lg:w-[450px] '/>
      </div> */}
