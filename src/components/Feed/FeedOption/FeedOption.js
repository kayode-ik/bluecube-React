import { Icon } from '@material-ui/core'
import React from 'react'
import './FeedOption.css'

function FeedOption({Icon, title}) {
    return (
        <div className="feedOption">
            <h4>{title}</h4>
            <Icon />
            <div className="v1"></div>
        </div>
    )
}

export default FeedOption
