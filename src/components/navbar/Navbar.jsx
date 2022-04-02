import React from 'react'
import  "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
 const Navbar = () => {
  return (
    <div className='navbar'>
      <div classsName='wrapper'>
       <div className="wrapper">
       <input type="text" className="search" placeholder="Search..."/>
       <SearchIcon className='icon' />
       </div>
        <div className="items">
          <div className="item">
          <LanguageOutlinedIcon className="icon" />
            English
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
