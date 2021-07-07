import React from 'react'
import './SidebarOption.css'

function SidebarOption({active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon className={` ${active && 'sidebarOption--icon'}`}/>
            <h2 className={` ${active && 'sidebarOption--text'}`}>{text}</h2>
            
        </div>
    )
}

export default SidebarOption
