import React from 'react'
import AboutUs from './AboutUs'

const SubHeader = () => {
  return (
    <div className='relative w-full mt-12 sm:mt-16 md:mt-20 lg:mt-32 xl:mt-40 z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 xl:px-20'>
      <div className='w-full max-w-2xl lg:max-w-3xl text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center leading-relaxed'>
        KNOB STUDIO offers you the best quality recording. With over 15 Years of Experience in the Entertainment Industry And Recording and Production.
      </div>
      <AboutUs/>
    </div>
  )
}

export default SubHeader
