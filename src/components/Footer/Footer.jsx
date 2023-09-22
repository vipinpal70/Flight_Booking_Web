// import React from 'react'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import logo from '../../assets/logo11.png'
import { TiSocialFacebook } from 'react-icons/ti'
import { FaPinterestP } from 'react-icons/fa'



const Footer = () => {
  return (
    <div className='footer'>
      
      <div className="sectionContainer contaier grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={logo} className="Logo" style={{ width: '50px' }} />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
            <AiFillYoutube className='icon' />
            <FaPinterestP className='icon' />
            <TiSocialFacebook className='icon' />
          </div>
        </div>

        <div className="footerLinks">
          {/* =========Information ================> */}
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href='#' className="link">
              Home
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Explore
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Flight Status
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Travel
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Check-In
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Manage Your Booking
            </a>
          </li>
        </div>
        <div className="footerLinks">
          {/* =========Information ================> */}
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href='#' className="link">
              Home
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Explore
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Flight Status
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Travel
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Check-In
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Manage Your Booking
            </a>
          </li>
        </div>
        {/* =========Quick Guide================> */}

        <div className="footerLinks">
          <span className="linkTitle">
            Quick Guide
          </span>
          <li>
            <a href='#' className="link">
              FAQ
            </a>
          </li>
          <li>
            <a href='#' className="link">
              How to
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Features
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Baggage
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Route Map
            </a>
          </li>
          <li>
            <a href='#' className="link">
              Our communities
            </a>
          </li>
        </div>

      </div>

      <div className="copyRight">
        <p>
          Design Developed by <strong> Vipin</strong> | Copyright © 2023
        </p>
      </div>
    </div>
  )
}

export default Footer;