import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption/SidebarOption'
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import WifiTetheringOutlinedIcon from '@material-ui/icons/WifiTetheringOutlined';
import CallMergeOutlinedIcon from '@material-ui/icons/CallMergeOutlined';
import DeckOutlinedIcon from '@material-ui/icons/DeckOutlined';

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* bluecode icon/logo */}
            <div className='sidebar_top'>
            <img  className="logoimg"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYXcvW-Inf1fuD2rD9UNOOR_CRf0OO2Gxem0mjDm2C4jsukmZjXgOj29Bi0zTjsgwhic&usqp=CAU" 
              alt="logo" />
              <p className="logo">bluecube</p>
            </div>

            {/* SidebarOptions1 */}
            <SidebarOption
            active
            Icon={HomeIcon}
            text="Home" 
            />
            <SidebarOption
            Icon={MailOutlineIcon}
            text="Message" />

            <h2 className="sidebar_middle">SHARE</h2>

            {/* SidebarOptions1 */}
            <SidebarOption
            Icon={EqualizerOutlinedIcon}
            text="Ranking" 
            />
            <SidebarOption
            Icon={CallMergeOutlinedIcon}
            text="Challenge" 
            />
            <SidebarOption
            Icon={DeckOutlinedIcon}
            text="Party" 
            />
            <SidebarOption
            Icon={WifiTetheringOutlinedIcon}
            text="Connect" 
            />
            <SidebarOption
            Icon={EmojiPeopleOutlinedIcon}
            text="Parade" 
            />
            <SidebarOption
            Icon={GroupOutlinedIcon}
            text="Group" 
            />
            
        </div>
    )
}

export default Sidebar
