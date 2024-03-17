import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'

function Home() {
  const navigate = useNavigate()


  function handleNavigateToContactPage() {
    navigate('/contact')
  }

  return (
    <section id='home' className='home h-[100%] flex justify-center items-center flex-col' >
      <div className='home_text-wrapper flex items-center justify-center flex-col '>
        <h1 className="intro text-[3rem] md:text-[8rem] sm:text-[4rem] md:leading-[10rem]  leading-[6rem] font-bold text-blue-500 relative overflow-hidden whitespace-nowrap">
          Hello, I'm Robert
          <br />
          <span className=' text-nowrap'>Full Stack Web Developer</span>
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(550px)'
        }}
        end={{
          transform: 'translateY(0px)'
        }}
      >
        <div className='home_contact-me flex justify-center mt-10  '>
          <button onClick={handleNavigateToContactPage} className='cursor-pointer py-[10px] px-[65px] text-[2rem] bg-transparent font-semibold border-[2px] border-[#1D9BF0] rounded-lg hover:bg-[#1D9BF0] transition-all '>
            Hire Me
          </button>
        </div>
      </Animate>
    </section>
  )
}

export default Home