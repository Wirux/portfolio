import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'

function Social() {
  return (
    <div>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-sky-950'>
            <a className='flex justify-between items-center w-full text-gray-200' href='https://www.linkedin.com/in/adam-wilczek'>
              Linkendin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-green-950'>
            <a className='flex justify-between items-center w-full text-gray-200' href='https://github.com/Wirux'>
              GitHub <FaGithub size={30} />
            </a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-purple-950'>
            <a className='flex justify-between items-center w-full text-gray-200' href='mailto: Adam.Wilczek@protonmail.com'>
              Email <HiOutlineMail size={30} />
            </a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-800'>
            <a className='flex justify-between items-center w-full text-gray-200' href='/'>
              Resume <BsFillPersonFill size={30} />
            </a></li>
        </ul>
      </div>
      <div className='lg:hidden max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full bg-[#0a192f]' >
        <div>
          <p className='text-4xl border-b-4 border-pink-700 text-stone-400'>
            Social
          </p>
        </div>
        <div className='w-full grid grid-cols-2 gap-4 text-center py-8 '>
          <a className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300 flex flex-col items-center justify-center text-center text-sky-700' href='https://www.linkedin.com/in/adam-wilczek'>
            <FaLinkedin size={40} />
            <p>Linkendin</p>
          </a>
          <a className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300 flex flex-col items-center justify-center text-center text-green-700' href='https://github.com/Wirux'>
            <FaGithub size={40} />
            <p>GitHub</p>
          </a>
          <a className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300 flex flex-col items-center justify-center text-center text-purple-700' href='mailto: Adam.Wilczek@protonmail.com'>
            <HiOutlineMail size={40} />
            <p>Email</p>
          </a>
          <a className='shadow-md shadow-[#040c16] hover:scale-110 hover:shadow-pink-950 duration-300 flex flex-col items-center justify-center text-center text-gray-300' href='google.com'>
            <BsFillPersonFill size={40} />
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div >
  )
}

export default Social
