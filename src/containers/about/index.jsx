import React from 'react'
import PageHeaderContent from '../../components/pageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'

const personalDetails = [
  {
    label: 'Name',
    value: 'Robert Anthony'
  },
  {
    label: 'Age',
    value: '22'
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

const aboutme = `I am Robert Anthony Oyango, a passionate and driven individual currently pursuing a degree in Mechatronics while also advancing my skills as a Full Stack Web Developer. My journey is fueled by a deep-seated love for engineering and technology, blending innovation, creativity, and technical expertise in every step.

In addition to my academic pursuits, I have cultivated a strong interest in Full Stack Web Development. With a keen eye for design and a knack for coding, I have embarked on various projects that showcase my proficiency in this domain.

In addition, collaborating with cross-functional teams to design and implement innovative solutions for online businesses. By combining my knowledge of Mechatronics with my expertise in web development, I have delivered tailor-made solutions that address the specific needs of clients.

My dedication to my craft, coupled with my insatiable thirst for learning and exploration, sets me apart as a dynamic and forward-thinking individual. As I continue to expand my skillset and delve deeper into the realms of Mechatronics and Full Stack Web Development, I remain committed to pushing the boundaries of what is possible and making a meaningful impact in the world of technology.`


function About() {
  return (
    <section id='about' className='about'>
      <PageHeaderContent headerText='About Me' icon={<BsInfoCircleFill size={40} />} />
      <div className='about_content'>
        <h3>Full Stack Web Developer</h3>
      </div>
    </section>
  )
}

export default About