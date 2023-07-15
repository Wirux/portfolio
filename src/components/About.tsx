import React from 'react'

const About = () => {
  return (
    <div className='bg-[#0a192f]  h-screen w-full'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-5'>
          <div className='sm:text-right'>
            <p className='text-4xl text-stone-500 inline border-b-4 border-pink-700'>
              About
            </p>
          </div>
          <div> </div>
          <div className='max-w-[1000px] w-full px-4 grid  gap-5'>
            <div className='sm:text-right text-4xl text-gray-400'>
              <p> dah jw idh awd doiwajdw owiajdoiwj </p>
            </div>
          </div>
          <div> </div>
        </div>
      </div>
    </div>
  )
}

export default About
