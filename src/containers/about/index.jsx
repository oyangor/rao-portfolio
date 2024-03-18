import React from 'react'
import PageHeaderContent from '../../components/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { FaReact, FaDev, FaJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';


const personalDetails = [
  {
    label: 'Name',
    value: 'Robert'
  },
  {
    label: 'Age',
    value: '22 years'
  },
  {
    label: 'Country',
    value: 'Kenya'
  },
  {
    label: 'Mail',
    value: 'oyangor403@gmail.com'
  },
  {
    label: 'Tel',
    value: '+254745805749'
  }
]

const aboutMe1 = `I am Robert Anthony Oyango, a passionate and driven individual currently pursuing a degree in Mechatronics while also advancing my skills as a Full Stack Web Developer. My journey is fueled by a deep-seated love for engineering and technology, blending innovation, creativity, and technical expertise in every step.`
const aboutMe2 = 'In addition to my academic pursuits, I have cultivated a strong interest in Full Stack Web Development. With a keen eye for design and a knack for coding, I have embarked on various projects that showcase my proficiency in this domain.'
const aboutMe3 = 'Moreover, collaborating with cross-functional teams to design and implement innovative solutions for online businesses. By combining my knowledge of Mechatronics with my expertise in web development, I have delivered tailor-made solutions that address the specific needs of clients.'
const aboutMe4 = 'My dedication to my craft, coupled with my insatiable thirst for learning and exploration, sets me apart as a dynamic and forward-thinking individual. As I continue to expand my skillset and delve deeper into the realms of Mechatronics and Full Stack Web Development, I remain committed to pushing the boundaries of what is possible and making a meaningful impact in the world of technology.'

function About() {
  return (
    <section id='about' className='about'>
      <PageHeaderContent headerText='About Me' icon={<BsInfoCircleFill size={40} />} />
      <div className='about_content flex gap-[20px] p-[20px] w-[100%] flex-col md:flex-row '>
        <div className='about_content_personalWrapper w-[100%] md:w-[50%] '> <Animate
          play
          duration={1.5}
          delay={0.1}
          start={{
            transform: 'translateX(-900px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <h3 className=' mb-[10px] font-[700] text-[2.5rem] text-[#4299e1]  '>Full Stack Web Developer</h3>
          <p className=' text-[1.8rem] leading-[-15.35rem] pb-[20px]   '>{aboutMe1}</p>
          {/* <p className=' text-[1.8rem] leading-[-15.35rem] pb-[20px]   '>{aboutMe2}</p>
          <p className=' text-[1.8rem] leading-[-15.35rem] pb-[20px]   '>{aboutMe3}</p>
          <p className='lastP text-[1.8rem] leading-[-15.35rem] pb-[20px]    '>{aboutMe4}</p> */}

        </Animate>

          <Animate
            play
            duration={1.5}
            delay={0.1}
            start={{
              transform: 'translateX(500px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >

            <h3 className='h3 mb-[10px] font-[700] text-[2.5rem] text-[#4299e1]  '>Personal Information</h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i} className=' leading-4 mb-10 flex '>
                    <span className='title text-[18px] font-[700] leading-[1px]  underline relative inline-block mr-[16px] pb-[1px]  '>{item.label} : </span>
                    <span className="value text-[18px] font-[700] leading-[1px]  relative inline-block mr-[16px] pb-[5px]   ">{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate></div>
        <div className='about_content_servicesWrapper  w-[100%] md:w-[50%] flex justify-center items-start mt-36'>
          <Animate
            play
            duration={1.5}
            delay={0.1}
            start={{
              transform: 'translateX(600px)'
            }}
            end={{
              transform: 'translateX(0px)'
            }}
          >
            <div className='about_content_servicesWrapper_innerContent rounded-full custom-radial-gradient  md:h-[350px] md:w-[350px] flex justify-center items-center md:-mt-37 '>
              <div className='absolute top-[-9%] left-[41%] '><FaReact color='#4299e1' size={60} /> {/* React icon */}</div>
              <div className='absolute right-[-8%] top-[41.5%] '><FaJs color='#4299e1' size={60} /> {/* JavaScript icon */}</div>
              <div className='absolute bottom-[-10%] left-[41.5%]'><FaHtml5 color='#4299e1' size={60} /> {/* HTML5 icon */}</div>
              <div className='absolute  left-[-8%] top-[41.5%]'><FaCss3Alt color='#4299e1' size={60} /> {/* CSS3 icon */}</div>
              {/* <div className='absolute'><FaDev color='#4299e1' size={60} /></div> */}
              {/*  <div className='absolute'><FaPython color='#4299e1' size={60} /> </div> */}
            </div>
          </Animate>

        </div>
      </div>
    </section>
  )
}

export default About