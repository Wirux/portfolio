import wolfAvatar from '../assets/Wolf_Avatar.png'

import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import { type } from 'os'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed flex bg-[#0a192f] h-20 w-full text-sky-200">
      <div >
        <img src={wolfAvatar} alt='logo' style={{ width: '80px' }} />
      </div>
      {/* menu */}
      <div>
        <ul className='hidden md:flex'>
          <li>jj</li>
          <li>kk</li>
          <li>hh</li>
          <li>ff</li>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 '>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>jj</li>
        <li className='py-6 text-4xl'>kk</li>
        <li className='py-6 text-4xl'>hh</li>
        <li className='py-6 text-4xl'>ff</li>
      </ul>
      {/* social icons */}
      {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'> */}
      {/*   <ul> */}
      {/*     <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-sky-950'> */}
      {/*       <a className='flex justify-between items-center w-full text-sky-200' href='/'> */}
      {/*         Linkendin <FaLinkedin size={30} /> */}
      {/*       </a> */}
      {/*     </li> */}
      {/*     <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-green-950'> */}
      {/*       <a className='flex justify-between items-center w-full text-sky-200' href='/'> */}
      {/*         GitHub <FaGithub size={30} /> */}
      {/*       </a></li> */}
      {/*     <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-purple-950'> */}
      {/*       <a className='flex justify-between items-center w-full text-sky-200' href='/'> */}
      {/*         Email <HiOutlineMail size={30} /> */}
      {/*       </a></li> */}
      {/*     <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-gray-800'> */}
      {/*       <a className='flex justify-between items-center w-full text-sky-200' href='/'> */}
      {/*         Resume <BsFillPersonFill size={30} /> */}
      {/*       </a></li> */}
      {/*   </ul> */}
      {/* </div> */}
    </div >
  )
}

export default Navbar

