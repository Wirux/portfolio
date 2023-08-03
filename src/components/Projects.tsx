import bike from '../assets/projects/bike.png'
import iac from '../assets/projects/iac.png'
import monitoring from '../assets/projects/monitoring.png'
import policies from '../assets/projects/policies.png'
import Azure from '../assets/clouds/azure.png'
import Aws from '../assets/clouds/aws.png'
import Gcp from '../assets/clouds/gcp.png'
import Ts from '../assets/langs/ts.png'
import go from '../assets/langs/go.png'
import python from '../assets/langs/python.png'
import c from '../assets/langs/c.png'
import terraform from '../assets/tech/terraform.png'
import kube from '../assets/tech/kube.png'
import pipeline from '../assets/tech/pipeline.png'
import git from '../assets/tech/git.png'
const Projects = () => {
  return (
    <div className='bg-[#0a192f] text-stone-400'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl border-b-4 border-pink-700'>
            Projects
          </p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2  gap-4 text-center py-6 border-b-2 border-pink-800'>
          <div className='group relative hover:scale-105 hover:shadow-pink-950 duration-300'>
            <img className='w-full mx-auto' src={iac} alt='bike project' />
            {/* ---- icons ---- */}
            <div className='absolute bottom-0 w-full grid grid-cols-2 gap-4 duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent from-15% to-pink-950 shadow-md shadow-[#040c16]'>
              <div>
                <img className='w-20 mx-auto my-2' src={terraform} alt='Ts icon' />
              </div>
              <div>
                <img className='w-20 mx-auto my-2' src={kube} alt='go icon' />
              </div>
            </div>
          </div>
          <div className='group relative hover:scale-105 hover:shadow-pink-950 duration-300'>
            <img className='w-full mx-auto' src={monitoring} alt='bike project' />
            {/* ---- icons ---- */}
            <div className='absolute bottom-0 w-full grid grid-cols-2 gap-4 duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent from-15% to-pink-950 shadow-md shadow-[#040c16]'>
              <div>
                <img className='h-20 mx-auto' src={go} alt='Ts icon' />
              </div>
              <div>
                <img className='w-20 mx-auto ' src={pipeline} alt='go icon' />
              </div>
            </div>
          </div>
          <div className='group relative hover:scale-105 hover:shadow-pink-950 duration-300'>
            <img className='w-full mx-auto' src={policies} alt='bike project' />
            {/* ---- icons ---- */}
            <div className='absolute bottom-0 w-full grid grid-cols-2 gap-4 duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent from-15% to-pink-950 shadow-md shadow-[#040c16]'>
              <div>
                <img className='w-20 mx-auto' src={Azure} alt='Ts icon' />
              </div>
              <div>
                <img className='h-20 mx-auto -mt-2' src={Gcp} alt='go icon' />
              </div>
            </div>
          </div>
          <div className='group relative hover:scale-105 hover:shadow-pink-950 duration-300'>
            <img className='w-full mx-auto' src={bike} alt='bike project' />
            {/* ---- icons ---- */}
            <div className='absolute bottom-0 w-full grid grid-cols-2 gap-4 duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent from-15% to-pink-950 shadow-md shadow-[#040c16]'>
              <div>
                <img className='w-24 mx-auto -mt-2' src={c} alt='Ts icon' />
              </div>
              <div>
                <img className='w-20 mx-auto' src={python} alt='go icon' />
              </div>
            </div>
          </div>
        </div>
      </div >

    </div >
  )
}

export default Projects

          // <div className='group relative hover:scale-105 hover:shadow-pink-950 duration-300'>
          //   <img className='w-full mx-auto' src={bike} alt='bike project' />
          //   {/* ---- icons ---- */}
          //   <div className='absolute bottom-0 w-full grid grid-cols-2 gap-4 duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent from-15% to-pink-950 shadow-md shadow-[#040c16]'>
          //     <div>
          //       <img className='w-20 mx-auto' src={Ts} alt='Ts icon' />
          //     </div>
          //     <div>
          //       <img className='h-20 mx-auto' src={go} alt='go icon' />
          //     </div>
          //   </div>




// <div className='shadow-md group shadow-[#040c16] relative '>
          //   <img className='w-full mx-auto' src={bike} alt='bike project' />
          //   {/* ---- icons ---- */}
          //   <div className='absolute bottom-0 mb-[-10px] w-full grid grid-cols-2 gap-4 text-center group-hover:mb-[0px] bg-gray-600 duration-200'>
          //     <div className='shadow-md shadow-[#040c16] '>
          //       <img className='w-20 mx-auto' src={Ts} alt='Ts icon' />
          //     </div>
          //     <div className='shadow-md shadow-[#040c16]'>
          //       <img className='h-20 mx-auto' src={go} alt='go icon' />
          //     </div>
          //   </div>
          // </div>
