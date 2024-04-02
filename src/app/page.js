import Image from 'next/image'
import InfoCard1 from './components/InfoCard1'
import InfoCard2 from './components/InfoCard2'
import InfoCard3 from './components/InfoCard3'
import Footer from './components/Footer'
import { Carousel } from "flowbite-react";
export const metadata = {
  title: 'Nk construction | Concrete pumping service',
  description: 'Nk construction provides best concrete pumping service in Dallas',
}

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col">
      <section className='flex relative bg-stone-100 py-6 lg:py-12 lg:items-center lg:px-16 flex-col lg:flex-row'>
        <div className='mx-6 text-black rounded-lg p-4  lg:w-1/2'>
          <h1 className='text-3xl font-semibold text-red-500'>Nk construction LLC</h1>
          <h2 className='text-lg text-red-500 font-medium'>Concrete pumping service</h2>
          <p className='my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit tempor ex. Duis sed urna varius, hendrerit quam vitae, vehicula orci. Praesent lacinia ex non risus rutrum, id convallis odio tincidunt.</p>
          {/* <div className='flex gap-x-4  items-center mt-4'>
            <IoLogoFacebook className='w-6 h-6 text-blue-600'/>
            <LuInstagram className='w-6 h-6 text-red-500'/>
          </div> */}
                  <button className='bg-red-500 p-2 rounded-lg  hover:shadow-lg hover:border-dotted text-white my-2'>Free estimate</button>

        </div>
        <a href="https://storyset.com/work" className='flex lg:w-1/2 justify-center items-center'><img src='/Construction-rafiki.svg' className='flex lg:w-[450px] lg:h-[450px] h-96 w-96'/></a>
      </section>
      <section className='bg-gray-200 py-12 px-4 border-t-red-500 border-solid border-t-2'>
        <h2 className='text-red-500 font-semibold text-2xl mb-4  text-center'>About us
        </h2>
        <div className='flex flex-col lg:flex-row gap-y-6 gap-x-6 lg:px-12'>
          <InfoCard1 />
          <InfoCard2 />
          <InfoCard3 />
        </div>

      </section>
      <section className='bg-white py-8 px-4'>
        <h1 className='text-red-500 text-2xl font-semibold text-center mb-4'>See our work</h1>
          <div className='grid lg:grid-cols-3 gap-x-6 gap-y-4 text-white lg:px-12 lg:py-8'>
            <div className='relative hover:shadow-2xl cursor-pointer hover:border-2 border-solid border-red-500 rounded-lg'>
              <img src='https://i.postimg.cc/prQH8LbB/driveways.webp' className='rounded-lg'/>
              <p className='absolute top-4 right-4 text-xl  font-semibold'>Driveways</p>
            </div>
            <div className='relative hover:shadow-2xl cursor-pointer hover:border-2 border-solid border-red-500 rounded-lg'>
              <img src='https://i.postimg.cc/bNHnYxMZ/pool.jpg' className='rounded-lg'/>
              <p className='absolute top-4 right-4 text-xl  font-semibold'>Pool decks</p>
            </div>
            <div className='relative hover:shadow-2xl cursor-pointer hover:border-2 border-solid border-red-500 rounded-lg'>
              <img src='https://i.postimg.cc/L8BGp7D7/walk-way.jpg' className='rounded-lg h-full'/>
              <p className='absolute top-4 right-4 text-xl  font-semibold'>Walk ways</p>
            </div>
          </div>
      </section>
      <Footer />
    </main>
  )
}
