import React from 'react'
import Profile from '../Img/profile.jpg'
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className='navbar_main'>
        <div className='navigationBar'>
          <button>
            <AiOutlineMenu/>
          </button>
        </div>
        <div className='profiledetails'>
          <ul>
            <li>
              <button>
                <FiShoppingCart />
              </button>
            </li>
            <li>
              <button>
                <BsChatLeft />
              </button>
            </li>
            <li>
              <button>
              <RiNotification3Line />
              </button>
            </li>
            <li>
              <button className='userName'>
                <img src={Profile} alt='kapil' />
                <span>Hi <b>Kapil</b> <MdKeyboardArrowDown /></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
