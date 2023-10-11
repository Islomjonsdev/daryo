import React from 'react';
import "./Sidebar.scss";
import { FiX } from "react-icons/fi";
import sidebarLogo from "../../assets/images/logo.svg"
import { Link } from 'react-router-dom';

const Sidebar = ({isSidebarActive, setIsSidebarActive}) => {
  return (
    <div className={isSidebarActive === true ? "sidebar sidebaractive" : "sidebar"}>
        <div className='sidebar__container'>
          <div className='sidebar__wrapper'>
              <FiX className='sidebar__icon' onClick={() => setIsSidebarActive(false)}/>
          </div>
          <Link className='sidebar__link'>
              <img className='sidebarImg' src={sidebarLogo} alt="" />
          </Link>
        </div>
    </div>
  )
}

export default Sidebar