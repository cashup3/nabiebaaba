import React from 'react'
import AboutUs from './AboutUs'

const SubHeader = () => {
  return (
    <div className='relative w-full mt-12 sm:mt-16 md:mt-20 lg:mt-32 xl:mt-40 z-10 flex flex-col items-center px-4 sm:px-6 lg:px-8 xl:px-20'>
      <p className='w-full max-w-2xl lg:max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center leading-relaxed'>
        Knob Studio is a music video production company in Toronto, Canada, with over 15 years of experience in the entertainment industry.
      </p>
      <AboutUs/>
    </div>
  )
}

export default SubHeader
