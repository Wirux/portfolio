import bike from '../assets/projects/bike.png'
import iac from '../assets/projects/iac.png'
import monitoring from '../assets/projects/monitoring.png'
import policies from '../assets/projects/policies.png'
import Ts from '../assets/langs/ts.png'
import go from '../assets/langs/go.png'
const Works = () => {
  return (
    <div className='bg-[#0a192f] text-stone-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl border-b-4 border-pink-700'>
            Projects
          </p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2  gap-4 text-center py-6 border-b-2 border-pink-800'>
          {/* <div className='container'> */}
          <div className='shadow-md group shadow-[#040c16] relative '>
            <img className='w-full mx-auto' src={bike} alt='terraform icon' />
            {/* <div className='absolute bottom-0 w-full flex flex-col justify-center'> */}
            {/*   <p>nsns</p> */}
            {/*   <p>sss</p> */}
            {/* </div> */}
            <div className='invisible group-hover:visible absolute bottom-0 mb-[-100px] w-full grid grid-cols-2 gap-4 text-center group-hover:mb-[-10px] duration-200'>
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src={Ts} alt='Ts icon' />
                <p className='my-4'> TS</p>
              </div>
              <div className='shadow-md shadow-[#040c16]'>
                <img className='h-20 mx-auto' src={go} alt='go icon' />
                <p className='my-4'> GO</p>
              </div>
            </div>
            {/* <ul className={'bg-[#0a192f] flex flex-col justify-center items-center'}> */}
            {/*   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-sky-950'> */}
            {/*     <a className='flex justify-between items-center w-full text-sky-200' href='/'> */}
            {/*       Linkendin */}
            {/*     </a> */}
            {/*   </li> */}
            {/*   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-green-950'> */}
            {/*     <a className='flex justify-between items-center w-full text-sky-200' href='/'> */}
            {/*       GitHub */}
            {/*     </a></li> */}
            {/*   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-purple-950'> */}
            {/*     <a className='flex justify-between items-center w-full text-sky-200' href='/'> */}
            {/*       Email */}
            {/*     </a></li> */}
            {/*   <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-800'> */}
            {/*     <a className='flex justify-between items-center w-full text-sky-200' href='/'> */}
            {/*       Resume */}
            {/*     </a></li> */}
            {/* </ul> */}
            {/* </div> */}
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-pink-950 duration-300'>
            <img className='w-full mx-auto' src={iac} alt='kube icon' />
            <p className='my-4'> Kubernetes</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 hover:shadow-pink-950 duration-300'>
            <img className='w-20 mx-auto' src={monitoring} alt='git icon' />
            <p className='my-4'> Git</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950  duration-300'>
            <img className='w-20 mx-auto' src={policies} alt='pipeline icon' />
            <p className='my-4'> Pipeline </p>
          </div>
        </div>
      </div>

    </div >
  )
}

export default Works  
