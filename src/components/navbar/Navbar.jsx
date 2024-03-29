import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'
import './styles.scss'


import logo from "/RAOLOGO.jpg";

const NavBarItem = ({ item, classprops, handleToggle }) => (
  <li onClick={handleToggle} className={`mx-6 cursor-pointer uppercase text-[2rem] font-bold leading-[40px]  border-transition ${classprops}`}>
    <Link to={item.to}>{item.label}</Link>
  </li>
);

const data = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Skills', to: '/skills' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' }
]

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    setToggleMenu(!toggleMenu)
  }

  return (
    <nav className=" z-20 w-full sticky flex md:justify-center justify-between items-center p-4 gradient-bg-transactions h-[100px] border-b text-[1.5rem] ">
      <div className="md:flex-[0.5] flex-initial justify-center items-center ">
        <Link to='/' ><img src={logo} alt="logo" className="w-[60px] cursor-pointer rounded-full " /></Link>
      </div>
      <ul className="text-white hidden md:flex  list-none flex-row justify-between items-center flex-initial">
        {data.map((item, index) => (
          <NavBarItem key={item + index} item={item} />
        ))}

      </ul>
      <div className="flex relative z-10">
        {!toggleMenu && (
          <FaBars fontSize={30} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={30} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (

          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {data.map(
              (item, index) => <NavBarItem key={item + index} item={item} handleToggle={handleToggle} classprops="my-2 text-lg" />,
            )}
          </ul>

        )}
      </div>
    </nav>
  );
};

export default Navbar;