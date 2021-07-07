import React from 'react'
import './Header.css'
// import HeaderOption from './rOption';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from './HeaderOption/HeaderOption';




function Header() {
    return (
        <div className="header">
            <div className='header__left'>
            <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Find Something" type="text" />
                    {/* <input type="submit" name="search">Search</input> */}
                </div>
            </div>
            
            <div className="header__right">
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption 
                avatar={true}
                title='me' 
                // onClick={logoutOfApp} 
                />
            </div>
        </div>
    )
}

export default Header
