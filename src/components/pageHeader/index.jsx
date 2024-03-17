import React from 'react'
import './styles.scss'

function PageHeaderContent(props) {
  const { headerText, icon } = props

  return (
    <div className='wrapper flex items-center p-[20px] '>
      <h2 className='text-[36px] font-[700] tracking-[1.5px] leading-[1rem] capitalize flex flex-grow-[1]  text-blue-500   '>{headerText}</h2>
      <span className='text-#4299e1'>{icon}</span>
    </div>
  )
}

export default PageHeaderContent