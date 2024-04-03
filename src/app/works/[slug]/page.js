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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium tincidunt consectetur. Sed scelerisque diam sit amet tortor volutpat volutpat. Sed vel pulvinar tortor, eu placerat dui. Sed faucibus nibh ut condimentum bibendum. Morbi vel ipsum porttitor, tempus nibh blandit, dictum elit. Donec tincidunt lorem eu ligula ultrices efficitur. Sed tincidunt eleifend fringilla.'
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium tincidunt consectetur. Sed scelerisque diam sit amet tortor volutpat volutpat. Sed vel pulvinar tortor, eu placerat dui. Sed faucibus nibh ut condimentum bibendum. Morbi vel ipsum porttitor, tempus nibh blandit, dictum elit. Donec tincidunt lorem eu ligula ultrices efficitur. Sed tincidunt eleifend fringilla.'
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium tincidunt consectetur. Sed scelerisque diam sit amet tortor volutpat volutpat. Sed vel pulvinar tortor, eu placerat dui. Sed faucibus nibh ut condimentum bibendum. Morbi vel ipsum porttitor, tempus nibh blandit, dictum elit. Donec tincidunt lorem eu ligula ultrices efficitur. Sed tincidunt eleifend fringilla.'
  }
]


export async function generateMetadata({ params  }) {
  // read route params
  const {slug} = params
  const worktype = data.find((work) => work.work_name.toLowerCase() == slug.toLowerCase().replace(/-/g, ' '))
  if (worktype) {
    return {
      title: worktype.work_name,
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
