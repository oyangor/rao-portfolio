import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Intro() {
  return (
    <div className='gradient-bg-services text-white flex justify-start mt-10 '>
      <div className='flex ml-8 md:ml-40 gap-10'>
        <div className='flex justify-between flex-col w-[200px] md:w-auto '>
          <h1 className='text-xl font-extrabold md:text-4xl'>Hi, I'm Robert.A Full Stack <br />Web Developer</h1>
          <h3 className=' max-w-[500px] mt-5'>I am a freelance full stack web developer based in Kenya.I am very passionate about the work i do.</h3>
          <div className='flex flex-row gap-[20px] mt-10'>
            <FaLinkedin size={30} color="#0077B5" className=' bg-transparent rounded-full' />
            <FaTwitter size={30} color="#1DA1F2" className=' bg-transparent rounded-full' />
            <FaGithub size={30} color="#333" className=' bg-transparent rounded-full' />
            <FaFacebook size={30} color="#3b5998" className=' bg-transparent rounded-full' />
          </div>
          <div className='mt-6 flex gap-2 mb-2 '>
            <button className='border-2 border-[#0c0f1e] border-solid border-1cursor-pointer eth-card rounded-full hover:bg-[#1c1952]'>See my works</button>
            <button className='border-2 border-[#0c0f1e] border-solid border-1cursor-pointer eth-card rounded-full hover:bg-[#1c1952]'>Contact me</button>
          </div>
        </div>
        <div className='flex justify-between'>Image</div>
      </div>
    </div>
  )
}

export default Intro