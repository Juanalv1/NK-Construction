import React from 'react'

const ImageList = ({images}) => {
  return (
    <div className='grid gap-y-4 gap-x-4 md:grid-cols-2 lg:grid-cols-3 lg:px-8 lg:gap-x-6 lg:gap-y-6'>
      {images && images.map((image, index) => (<img src={image} className='w-full rounded object-cover h-full' key={index} alt='Project image'/>))}
    </div>
  )
}

export default ImageList
