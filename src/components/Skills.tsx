import React from 'react'
import HTML from '../assets/html.png'

const Skills = () => {
  return (
    <div className='bg-[#0a192f] text-stone-400'>Skils
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl border-b-4 border-pink-700'>
            Skils
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6'>
          <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
        </div>
      </div>

    </div >
  )
}

export default Skills  
