import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineStock } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineCancel } from "react-icons/md";

const Sidebar = () => {
  return (
    <>
      <div className='mainSidebar'>
        <div className='mainLogo'>
          <Link to="/">
            <img src='https://web2rise.com/wp-content/themes/web2rise/assets/images/logo.png' alt="Main Logo"/>
          </Link>
          <button className='sideBrClose'>
          <MdOutlineCancel />
          </button>
        </div>
        <div className='sideMenu'>
          <ul>
            <li>Dashboard
                <ul>
                  <li><Link to="/expandedCard"><IoMdContacts /> <span>Expanded Card</span></Link></li>
                  <li><Link to="/table"><IoMdContacts /> <span>Table</span></Link></li>
                </ul>
              </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
