import React from 'react'

function Contact() {
  return (
    <div id='contact' className='w-full bg-[#0a192f] flex justify-center items-center p-4 py-8'>
      <form method='POST' action='https://getform.io/f/53c8701b-522a-4a17-a3c9-1149cc2900d6' className='flex flex-col max-w-[800px] w-full'>
        <div className='pb-6'>
          <p className='text-4xl border-b-4 border-pink-700 text-stone-400'>
            Contact
          </p>
          <p className='text-gray-400 py-4'>Fill out the contact form below, or use the other social channel. </p>
        </div>
        <input className='bg-gray-200 p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-gray-200' type="email" placeholder='Email' name='email' />
        <textarea className='bg-gray-200 p-2' name="message" rows={5} placeholder='Message' />
        <button className='rounded-lg text-gray-400 px-4 py-4 my-8 mx-auto bg-gradient-to-b from-transparent to-pink-700 hover:from-pink-700/10 hover:scale-110 hover:to-pink-700 duration-300 '>Let's collaborate</button>
      </form>
    </div>
  )
}

export default Contact
        // <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-950 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
