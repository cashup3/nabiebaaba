import React from 'react'
import AboutUs from './AboutUs'

const SubHeader = () => {
  return (
    <div className='absolute top-1/5 left-0 right-0 w-full mt-20 sm:mt-32 lg:mt-40 z-10 flex flex-col items-center px-4 sm:px-6 lg:px-20'>
      <div className='w-full max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-xl lg:text-2xl text-center'>
        KNOB STUDIO offers you the best quality recording. With over 15 Years of Experience in the Entertainment Industry And Recording and Production.
      </div>
      <AboutUs/>
    </div>
  )
}

export default SubHeader
