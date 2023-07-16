import React from 'react'
import HTML from '../assets/html.png'
import Azure from '../assets/clouds/azure.png'
import Aws from '../assets/clouds/aws.png'
import Gcp from '../assets/clouds/gcp.png'
import Ts from '../assets/langs/ts.png'
import go from '../assets/langs/go.png'
import python from '../assets/langs/python.png'
import c from '../assets/langs/c.png'

const Skills = () => {
  return (
    <div className='bg-[#0a192f] text-stone-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl border-b-4 border-pink-700'>
            Skills
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-6 border-b-2 border-pink-800'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300'>
            <img className='w-20 mx-auto' src={Gcp} alt='GCP icon' />
            <p className='my-4'>GCP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300'>
            <img className='w-20 mx-auto' src={Azure} alt='Azure icon' />
            <p className='my-4'>Azure</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300'>
            <img className='w-20 mx-auto' src={Aws} alt='AWS icon' />
            <p className='my-4'>AWS</p>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6 border-b-2 border-pink-800'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300'>
            <img className='w-20 mx-auto' src={Ts} alt='Ts icon' />
            <p className='my-4'> TS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300'>
            <img className='h-20 mx-auto' src={go} alt='go icon' />
            <p className='my-4'> GO</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300'>
            <img className='w-20 mx-auto' src={python} alt='python icon' />
            <p className='my-4'> Python</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950  duration-300'>
            <img className='w-20 mx-auto' src={c} alt='c icon' />
            <p className='my-4'> C</p>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-6'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'> HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'> HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'> HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950  duration-300'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'> HTML</p>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Skills  
