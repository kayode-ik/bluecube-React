import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core';


function HeaderOption({avatar, Icon, title}) {
    return (
        <div className="headerOption">
        {avatar && (
            <Avatar className='headerOption__icon' 
            ><img className="img_header" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
            alt="profile"/>
            </Avatar>
        )}
        <h3 className="headerOption__title">{title}</h3>
        {Icon && <Icon className="headerOption__arrow" />} 

     </div>
    )
}

export default HeaderOption
