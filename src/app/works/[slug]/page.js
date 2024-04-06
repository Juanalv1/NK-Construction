import React from 'react'
import ImageList from '@/app/components/ImageList'
const data = [
  {
    work_name: 'Driveways',
    photos: [
      'https://i.postimg.cc/ncT1QYPw/dw1.jpg',
      'https://i.postimg.cc/yd9PJMMF/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-0b136b92.jpg',
      'https://i.postimg.cc/vHGzBS3V/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-38ff898c.jpg',
      'https://i.postimg.cc/cLHB7tq1/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-3bdca9dc.jpg',
      'https://i.postimg.cc/gjWK3Mp1/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-42d1bed0.jpg',
      'https://i.postimg.cc/SRffdWNR/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-6b1bf29b.jpg',
      'https://i.postimg.cc/tgndw0CL/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-881f7c1d.jpg',
      'https://i.postimg.cc/T34qt2GV/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-89affad5.jpg',
      'https://i.postimg.cc/h4LsKqbn/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-8fd5a3e0.jpg',
      'https://i.postimg.cc/BvRpnSVS/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-8fe2e539.jpg',
      'https://i.postimg.cc/264Qj4WG/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-940f39a9.jpg',
      'https://i.postimg.cc/1XBDwsJN/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-ba972617.jpg',
      'https://i.postimg.cc/sxspMv9r/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-c41728c8.jpg',
      'https://i.postimg.cc/QtLgr6FV/Imagen-de-Whats-App-2024-04-06-a-las-14-31-03-cce58fd1.jpg',
      
    ],
    description: 'Explore our gallery of driveway projects to discover stunning transformations and exceptional craftsmanship. From sleek modern designs to classic and durable solutions, our skilled team brings your driveway visions to life with precision and quality. Each project is tailored to enhance your property aesthetics, functionality, and curb appeal.'
  },
  {
    work_name: 'Pool decks',
    photos: [
      'https://i.postimg.cc/Y9ChmYLM/Imagen-de-Whats-App-2024-04-06-a-las-14-42-24-15d0dc36.jpg',
      'https://i.postimg.cc/ZRs0Pn63/Imagen-de-Whats-App-2024-04-06-a-las-14-42-24-8e225faa.jpg',
      'https://i.postimg.cc/d0Bh1415/Imagen-de-Whats-App-2024-04-06-a-las-14-42-24-9b156e80.jpg',
      'https://i.postimg.cc/bv8GpKzG/Imagen-de-Whats-App-2024-04-06-a-las-14-42-24-e8a5425a.jpg',
      'https://i.postimg.cc/WzQ3KyW1/Imagen-de-Whats-App-2024-04-06-a-las-14-42-24-f63dd961.jpg',
      
    ],
    description: 'Dive into luxury and relaxation with our pool deck showcase! Immerse yourself in a world of stylish poolside retreats, where every deck is a seamless blend of form and function. From sleek modern designs to timeless classics, our portfolio features an array of pool decks crafted to enhance your outdoor oasis. Whether you envision a resort-style paradise or a serene escape, our skilled team brings your vision to life with precision and expertise. Explore our collection and envision your ideal poolside sanctuary, where every moment is an indulgence in luxury and leisure!'
  },
  {
    work_name: 'Walk ways',
    photos: [
      'https://i.postimg.cc/256MBt6y/ww1.jpg',
      'https://i.postimg.cc/7h7pZTLN/ww2.jpg',
      'https://i.postimg.cc/BnNRb3JR/ww3.jpg',
      'https://i.postimg.cc/2jZpwgxB/ww4.jpg',
      'https://i.postimg.cc/9F56N1xg/ww5.jpg',
      'https://i.postimg.cc/MpzhzHJy/ww6.jpg',
      'https://i.postimg.cc/Dyr9VsHv/ww7.jpg',
      'https://i.postimg.cc/gjCmMWxg/ww8.jpg',
      
    ],
    description: 'Embark on a journey of elegance and functionality with our walkways display! Meander through our gallery of walkway projects, where each path is a testament to meticulous craftsmanship and thoughtful design. From charming garden pathways to grand entrance walkways, our portfolio showcases a diverse range of styles and materials tailored to complement any landscape. Whether you seek a seamless transition between outdoor spaces or a captivating focal point, our team creates walkways that enhance both the beauty and accessibility of your property. Take a stroll through our collection and envision the possibilities for your own outdoor spaces!'
  },
  {
    work_name: 'Patios',
    photos: [
      'https://i.postimg.cc/Y9nxVgJS/Imagen-de-Whats-App-2024-04-06-a-las-16-44-58-49d688ca.jpg',
      'https://i.postimg.cc/j2Dhr2b4/Imagen-de-Whats-App-2024-04-06-a-las-16-44-58-8546beb5.jpg',
      'https://i.postimg.cc/NMf4pbCV/Imagen-de-Whats-App-2024-04-06-a-las-16-44-58-ae866b0c.jpg',
      'https://i.postimg.cc/j2B4qTq0/Imagen-de-Whats-App-2024-04-06-a-las-16-44-58-c43908a5.jpg',
      'https://i.postimg.cc/XvgLftLd/Imagen-de-Whats-App-2024-04-06-a-las-16-44-58-f28dcd22.jpg',
      'https://i.postimg.cc/GpRzsbFb/Imagen-de-Whats-App-2024-04-06-a-las-16-44-59-cab99564.jpg',
      'https://i.postimg.cc/x1MtCXbs/p.jpg',
      
    ],
    description: 'Step into our world of outdoor living with our patio showcase! Explore an array of inviting and stylish patio designs that seamlessly blend functionality with aesthetics. From cozy retreats perfect for intimate gatherings to expansive entertaining spaces, our portfolio showcases the versatility and creativity of our patio designs. Whether you seek a rustic retreat or a contemporary oasis, our team is dedicated to crafting outdoor spaces that enhance your lifestyle and elevate your homes appeal. Dive into our collection and let us inspire your next outdoor escape!'
  },
  {
    work_name: 'Decorative concrete',
    photos: [
      'https://i.postimg.cc/RCDKVBLD/dw1.jpg',
      'https://i.postimg.cc/1tW6Fhh4/dw10.jpg',
      'https://i.postimg.cc/RhNtQs4d/dw12.jpg',
      'https://i.postimg.cc/GtVyMFpC/dw2.jpg',
      'https://i.postimg.cc/zXHWycdX/dw3.jpg',
      'https://i.postimg.cc/fR4dmfF7/dw4.jpg',
      'https://i.postimg.cc/xdnbFT9c/dw5.jpg',
    ],
    description: 'Discover the artistry of decorative concrete in our gallery! Immerse yourself in a world where concrete transcends its utilitarian roots to become a stunning focal point of design. From intricate patterns to rich textures, our showcase highlights the endless possibilities of decorative concrete. Whether you desire the timeless elegance of stamped concrete or the modern flair of stained concrete, our skilled artisans transform ordinary surfaces into extraordinary works of art. Explore our collection and unleash the potential of decorative concrete in your home or commercial space!'
  },
  {
    work_name: 'Concrete pumping',
    photos: [
      'https://i.postimg.cc/y85HTRG7/Imagen-de-Whats-App-2024-04-06-a-las-14-50-33-0043d706.jpg',
      'https://i.postimg.cc/Cxd0D7mv/Imagen-de-Whats-App-2024-04-06-a-las-14-50-33-39c04afb.jpg',
      'https://i.postimg.cc/X7j4N4F6/Imagen-de-Whats-App-2024-04-06-a-las-14-50-33-4f87c8cd.jpg',
      'https://i.postimg.cc/J7cRWGsQ/Imagen-de-Whats-App-2024-04-06-a-las-14-50-33-79a66ee3.jpg',
      'https://i.postimg.cc/7YKDfdMG/Imagen-de-Whats-App-2024-04-06-a-las-14-50-33-9c183cd3.jpg',
      'https://i.postimg.cc/hGdqZjFT/pumping.jpg',
      
    ],
    description: 'At NK CONSTRUCTION Pumping, we offer a wide variety of services. When it comes to concrete line pumping, our number one priority is to deliver exceptional services for all our customers, large and small. We specialize in all aspects of concrete pumping for residential and commercial applications.'
  }
]


export async function generateMetadata({ params  }) {
  // read route params
  const {slug} = params
  const worktype = data.find((work) => work.work_name.toLowerCase() == slug.toLowerCase().replace(/-/g, ' '))
  if (worktype) {
    return {
      title: `${worktype.work_name} | Nk Construction`,
      description: `View ${worktype.description}`
    }
  }

}

const Works = ({ params }) => {

  const { slug } = params
  console.log(slug)
  const worktype = data.find((work) => work.work_name.toLowerCase() == slug.toLowerCase().replace(/-/g, ' '))
  return (
    <section className='flex flex-col px-4 py-4 bg-gray-200 lg:px-12'>
    { worktype && (<>
      <div className='flex flex-col lg:flex-row lg:mb-12'>
      <div className='flex lg:p-8 w-full lg:w-1/2 justify-center items-center'>
        <img src={worktype.photos[0]} className='rounded max-w-[450px] w-full'/>
      </div>
      <div className='mt-4 mb-12 lg:p-4 w-full lg:w-1/2 text-black'>
        <h1 className='text-red-500 text-3xl font-semibold'>{worktype.work_name}</h1>
        <p className='text-black mt-2'>{worktype.description}</p>
        {worktype && worktype.work_name == 'Concrete pumping' && (
        <>
        <p className='mt-4 text-red-500 mb-2'>Below are just a few types of the jobs we deliver to:
        </p>
        <ul className='grid grid-cols-2 list-disc place-content-center mx-auto px-4  items-center'>
        <li>Basements</li>
        <li>Footings</li>
        <li>Foundations</li>
        <li>Decorative Slabs</li>
        <li>Fencing</li>
        <li>Hardscaping</li>
        <li>Patios</li>
        <li>Retaining Walls</li>
        <li>Driveways</li>
        <li>Floors</li>
        <li>Sidewalks</li>
        <li>Home Remodels</li>
        <li>Block walls</li>
        <li>Parking lots</li>
        <li>Pool decks</li>
        <li>Tennis courts</li>
        </ul>
        </>
      )}
      </div>
      </div>
      <h2 className='text-red-500 text-3xl font-semibold mb-3 text-center'>Gallery</h2>
      <ImageList images={worktype.photos}/></>
    )}
    </section>
  )
}

export default Works
