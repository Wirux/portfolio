import React from 'react'

function Contact() {
  return (
    <div data-name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/53c8701b-522a-4a17-a3c9-1149cc2900d6' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-stone-400'>Contact</p>
          <p className='text-gray-400 py-4'>Fill out the contact form below, or use the other channel. </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows={5} placeholder='Message' />
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-950 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
