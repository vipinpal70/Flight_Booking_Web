import { useState } from 'react'
import './../../main.scss'
import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
import logo from './../../assets/logo11.png'

const Navbar = () => {
  // let's us set and remove the Nav if small screens
  const [active, setActive] = useState('navBarMenu');

  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
    setTimeout(() => {
      removeNavBar();
    }, 4000);
  }
  const removeNavBar = () => {
    setActive('navBarMenu');
  }
  // let's us set and remove the NavBar background 
  const [noBg, addBg] = useState('navBarTwo');

  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBarTwo navbar_with_bg');

    } else {

      addBg('navBarTwo');
    }
  }
  window.addEventListener('scroll', addBgColor);





  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
          <SiConsul className='icon' />
        </div>
        <div className="none flex">
          <li className="flex"> <BsPhoneVibrate className='icon' /> Support</li>
          <li className="flex"> <AiOutlineGlobal className='icon' /> Languages</li>

        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className='logo' />

        </div>
        <div className={active}>
          <ul className="menu flex">

            <li onClick={removeNavBar} className="listItem">Home </li>
            <li onClick={removeNavBar} className="listItem">About </li>
            <li onClick={removeNavBar} className="listItem">Offers </li>
            <li onClick={removeNavBar} className="listItem">Seats </li>
            <li onClick={removeNavBar} className="listItem">Destinations </li>

          </ul>

          <button onClick={removeNavBar} type='submit' className="btn flex btnOne">
            Contact
          </button >

        </div>

        <button className="btn flex btnTwo">
          Contact
        </button>

        <div onClick={showNavBar} className="toggleIcon">
          <CgMenuGridO className="Icon" />
        </div>
      </div>

    </div>
  )
}

export default Navbar
