import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className='bg-[#0a192f]  h-screen w-full'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-700'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-stone-500'>Adam</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm devops, fullstack  developer</h2>
        <p className='text-gray-500 py-4 max-w-[700px]'>ahdioad diojaiwod oixahwdoixaw ioiwdjoawjd awiodjawn oawidjawd awdadsd wdojawd aopdwd awdwad owajdawd</p>
        <div> <button className='text-stone-500 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-700 hover:border-pink-700'>
          View work
          <span className='group-hover:rotate-90 duration-200'><HiArrowNarrowRight className='ml-3' />
          </span>
        </button>
        </div>
      </div>
    </div >
  )
}

export default Home
