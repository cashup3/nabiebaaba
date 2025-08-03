import React from 'react'
import AboutUs from './AboutUs'

const SubHeader = () => {
  return (
    <div className='absolute top-1/5 left-1/2 w-full mt-20 sm:mt-32 lg:mt-40 z-10 flex flex-col items-start px-4 sm:px-6 lg:px-0'>
      <div className='w-full lg:w-1/2 text-sm sm:text-base md:text-xl lg:text-2xl flex'>
        KNOB STUDIO offers you the best quality recording at the best possible price. With over 10 years of experience in the recording and production industry.
      </div>
      <AboutUs/>
    </div>
  )
}

export default SubHeader
