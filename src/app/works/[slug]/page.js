import React from 'react'
import ImageList from '@/app/components/ImageList'
const data = [
  {
    work_name: 'Driveways',
    photos: [
      'https://i.postimg.cc/prQH8LbB/driveways.webp', 'https://i.postimg.cc/prQH8LbB/driveways.webp',
      'https://i.postimg.cc/prQH8LbB/driveways.webp',
      'https://i.postimg.cc/prQH8LbB/driveways.webp',
      'https://i.postimg.cc/prQH8LbB/driveways.webp',
      'https://i.postimg.cc/prQH8LbB/driveways.webp',
      'https://i.postimg.cc/prQH8LbB/driveways.webp',
    ],
    description: 'Explore our gallery of driveway projects to discover stunning transformations and exceptional craftsmanship. From sleek modern designs to classic and durable solutions, our skilled team brings your driveway visions to life with precision and quality. Each project is tailored to enhance your property aesthetics, functionality, and curb appeal.'
  },
  {
    work_name: 'Pool decks',
    photos: [
      'https://i.postimg.cc/bNHnYxMZ/pool.jpg', 'https://i.postimg.cc/bNHnYxMZ/pool.jpg',
      'https://i.postimg.cc/bNHnYxMZ/pool.jpg',
      'https://i.postimg.cc/bNHnYxMZ/pool.jpg',
      'https://i.postimg.cc/bNHnYxMZ/pool.jpg',
      'https://i.postimg.cc/bNHnYxMZ/pool.jpg',
      'https://i.postimg.cc/bNHnYxMZ/pool.jpg',
    ],
    description: 'Dive into luxury and relaxation with our pool deck showcase! Immerse yourself in a world of stylish poolside retreats, where every deck is a seamless blend of form and function. From sleek modern designs to timeless classics, our portfolio features an array of pool decks crafted to enhance your outdoor oasis. Whether you envision a resort-style paradise or a serene escape, our skilled team brings your vision to life with precision and expertise. Explore our collection and envision your ideal poolside sanctuary, where every moment is an indulgence in luxury and leisure!'
  },
  {
    work_name: 'Walk ways',
    photos: [
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg', 'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
    ],
    description: 'Embark on a journey of elegance and functionality with our walkways display! Meander through our gallery of walkway projects, where each path is a testament to meticulous craftsmanship and thoughtful design. From charming garden pathways to grand entrance walkways, our portfolio showcases a diverse range of styles and materials tailored to complement any landscape. Whether you seek a seamless transition between outdoor spaces or a captivating focal point, our team creates walkways that enhance both the beauty and accessibility of your property. Take a stroll through our collection and envision the possibilities for your own outdoor spaces!'
  },
  {
    work_name: 'Patios',
    photos: [
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg', 'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
    ],
    description: 'Step into our world of outdoor living with our patio showcase! Explore an array of inviting and stylish patio designs that seamlessly blend functionality with aesthetics. From cozy retreats perfect for intimate gatherings to expansive entertaining spaces, our portfolio showcases the versatility and creativity of our patio designs. Whether you seek a rustic retreat or a contemporary oasis, our team is dedicated to crafting outdoor spaces that enhance your lifestyle and elevate your homes appeal. Dive into our collection and let us inspire your next outdoor escape!'
  },
  {
    work_name: 'Decorative concrete',
    photos: [
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg', 'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
    ],
    description: 'Discover the artistry of decorative concrete in our gallery! Immerse yourself in a world where concrete transcends its utilitarian roots to become a stunning focal point of design. From intricate patterns to rich textures, our showcase highlights the endless possibilities of decorative concrete. Whether you desire the timeless elegance of stamped concrete or the modern flair of stained concrete, our skilled artisans transform ordinary surfaces into extraordinary works of art. Explore our collection and unleash the potential of decorative concrete in your home or commercial space!'
  },
  {
    work_name: 'Concrete pumping',
    photos: [
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg', 'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
      'https://i.postimg.cc/L8BGp7D7/walk-way.jpg',
    ],
    description: 'From foundations to high-rise structures, our concrete pumping service offers unparalleled speed, accuracy, and versatility, saving you time and labor costs. Trust Nk Construction LLC to elevate your project with seamless concrete delivery, tailored to meet your specific needs and deadlines. Experience the difference of professional concrete pumping for your next construction endeavor.'
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
      <div className='mt-4 mb-12 lg:p-4 w-full lg:w-1/2'>
        <h1 className='text-red-500 text-3xl font-semibold'>{worktype.work_name}</h1>
        <p className='text-black mt-2'>{worktype.description}</p>
      </div>
      </div>
      <h2 className='text-red-500 text-3xl font-semibold mb-3 text-center'>Gallery</h2>
      <ImageList images={worktype.photos}/></>
    )}
    </section>
  )
}

export default Works
