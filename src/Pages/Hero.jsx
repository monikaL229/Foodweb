import React from 'react'
import bg from '../Accets/bg .png'


const Hero = () => {
  return (
      <div>
    <div className='max-w-[1600px] mx-auto p-4'>
  <div className='max-h-[500px] relative'>

  <div className='text-center absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
  <h1 className=' text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
  <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Devlivered</h1>
  </div>

  <img src={bg} className='w-full max-h-[500px] object-cover' alt="Background" />
  </div>


    </div>


      </div>

  )
}

export default Hero
