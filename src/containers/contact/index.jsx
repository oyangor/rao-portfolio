import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaAddressBook } from 'react-icons/fa';
import PageHeaderContent from '../../components/pageHeader'
import { Animate } from 'react-simple-animate'
import './styles.scss'


function Contact() {

  const form = useRef()
  const [isSend, setIsSend] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSendEmail(e) {
    e.preventDefault()

    // service id,template id,form.current,public key

    emailjs.sendForm('service_ae0662w', 'template_fwkysvn', form.current, 'a1fq8l6fPLSg-YNZe')
      .then((result) => {
        //console.log(result)
        setIsSend(true)
        setTimeout(() => {
          setIsSend(false)
        }, 2500)
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((e) => {
        console.log(e.text);
        setIsSend(false)
      })
  }


  return (
    <section id='contact' className='contact'>
      <PageHeaderContent headerText='Contact' icon={<FaAddressBook size={40} />} />

      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(-200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <h3 className="contact_content_header-text ">Let's Talk</h3>

        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <div className="container-form flex justify-center items-center gap-10 flex-col overflow-hidden">
            <form ref={form} onSubmit={handleSendEmail} className='flex w-[70%] md:w-[75%] md:h-[75%] rounded-xl flex-col gap-10 border-solid border border-white items-center justify-center py-[1.25rem] px-[2.5rem]  '>
              <div className='input-box w-[75%] flex justify-between items-center gap-8 '>
                <label htmlFor="name" className=' font-bold text-2xl'>Name</label>
                <input className='text-black w-[75%] font-semibold text-[12px] rounded-md outline-none border-none resize-none border-b border-b-white p-[0.25rem] h-[30px]' type="text" placeholder='Name' name='to_name' onChange={(e) => setName(prev => e.target.value)} value={name} />
              </div>
              <div className='input-box w-[75%] flex justify-between items-center gap-8'>
                <label htmlFor="email" className=' font-bold text-2xl'>Email</label>
                <input className='text-black w-[75%] font-semibold text-[12px] rounded-md outline-none border-none resize-none border-b border-b-white p-[0.25rem] h-[30px]' type="email" required placeholder='Email' name='from_name' onChange={(e) => setEmail(prev => e.target.value)} value={email} />
              </div>
              <div className='input-box w-[75%] flex justify-between items-center gap-8'>
                <label htmlFor="description" className=' font-bold text-2xl'>Message</label>
                <textarea className='text-black font-semibold text-[12px] w-[75%]  rounded-md outline-none border-none resize-none border-b border-b-white p-[0.25rem] h-[40px]' type="text" placeholder='What do you think' name='message' onChange={(e) => setMessage(prev => e.target.value)} value={message} />
              </div>
              <button type='submit' onSubmit={handleSendEmail} className='bg-[#3B82F6] py-[10px] px-[50px] rounded-full cursor-pointer hover:bg-[#2766cb] font-bold text-2xl'>{isSend ? 'Submitted' : 'Submit'}</button>
              {
                isSend && <div className='email-alert'>
                  Email has been sent successfully
                </div>
              }
            </form>

          </div>

        </Animate>
      </div>
    </section>

  )
}

export default Contact