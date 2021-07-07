import { Avatar } from '@material-ui/core'
import React from 'react'
import './Card.css'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
// import { Dropdown } from 'react-bootstrap';

function CardNotify(
    { avatar, displayName, Icon, text, color }
    // avatar, 
) {

    return (
        <div className="cardNotify">
            {/* First data */}
            <div className="cardNotify__body">
                <div className="cardNotify__bodydivider">
                    <div className="cardNotify__avatar">
                        {avatar && (
                            <Avatar className='headerOption__icon'
                            ><img className="img_header" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="profile" />
                            </Avatar>
                        )}
                        {/* <Avatar><img className="card__img" src="" alt="" /></Avatar> */}
                        <div className="cardNotify__headerText">
                            <h3>
                                Micheal liked you!
                            </h3>
                        </div>
                    </div>
                    <div className="cardNotify__description">
                        <p>About 20 minutes ago</p>
                    </div>
                    <div className="cardNotify__icon">
                        <Icon style={{ color: color }} fontSize="small" />
                    </div>
                    <div className="hr"></div>
                </div>
            </div>

            {/* Second data */}
            <div className="cardNotify__body">
                <div className="cardNotify__bodydivider">
                    <div className="cardNotify__avatar">
                        {avatar && (
                            <Avatar className='headerOption__icon'
                            ><img className="img_header" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="profile" />
                            </Avatar>
                        )}
                        {/* <Avatar><img className="card__img" src="" alt="" /></Avatar> */}
                        <div className="cardNotify__headerText2">
                        <h3>
                                Jack liked you!
                            </h3>
                        </div>
                    </div>
                    <div className="cardNotify__description">
                        <p>About 40 minutes ago</p>
                    </div>
                    <div className="cardNotify__icon">
                        <Icon className="second_icon" fontSize="small" />
                    </div>
                    <div className="hr"></div>
                </div>
            </div>

            {/* Third data */}
            <div className="cardNotify__body">
                <div className="cardNotify__bodydivider">
                    <div className="cardNotify__avatar">
                        {avatar && (
                            <Avatar className='headerOption__icon'
                            ><img className="img_header" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="profile" />
                            </Avatar>
                        )}
                        {/* <Avatar><img className="card__img" src="" alt="" /></Avatar> */}
                        <div className="cardNotify__headerText2">
                        <h3>
                                Martin commented on your photo!
                            </h3>
                        </div>
                    </div>
                    <div className="cardNotify__description">
                        <p>About 56 minutes ago</p>
                    </div>
                    <div className="cardNotify__icon3">
                        <ChatBubbleIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardNotify;
