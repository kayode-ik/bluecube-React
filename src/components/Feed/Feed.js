import React, { useState } from 'react'
// import Unsplash, { toJson } from "unsplash-js";
// import axios from "axios";
import './Feed.css'
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from './HeaderOption/HeaderOption';
import FeedOption from './FeedOption/FeedOption';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import ImageCard from './FeedImageCard/ImageCard';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import CardNotify from './CardNotify/CardNotify';
import FavoriteIcon from '@material-ui/icons/Favorite';



function Feed() {

    //states- input query, images
    const [query, setQuery] = useState('');
    const accessKey = "neRIedceSNtsf-lZJpCd2uJ5iJV-8x4jEx91ZVkYOA8";
    const [images, setImages] = useState([]);
    //create the state for images, and update that state appropriate
    console.log(query);

    // const unsplash = new Unsplash({
    //     accessKey: ,
    //   });

    const searchImage = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form" + images)

        // const url = "https://api.unsplash.com/search/photos?page=1&query=" + images + "&client_id=" + accessKey;
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + images + "&client_id=" + accessKey;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results)
            setImages(data.results)
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <>
            <div className="feed">
                {/* Header */}
                <div className="feed__header">
                    <div className="header">
                        <div className='header__left'>

                            <form className="form" onSubmit={searchImage}>
                                <div className="header__search">
                                    <SearchIcon />
                                    <input
                                        placeholder="Find Something"
                                        type="text"
                                        name="query"
                                        value={query} onChange={(e) => setQuery(e.target.value)}
                                    />
                                    <button className="button" type="submit">Search</button>
                                </div>
                            </form>
                        </div>

                        <div className="header__right">
                            <HeaderOption
                                Icon={NotificationsIcon}
                                title=''
                            />
                            <HeaderOption
                                avatar={true}
                                title='Abigail'
                                Icon={ExpandMoreOutlinedIcon}
                            // onClick={logoutOfApp} 
                            />
                        </div>
                    </div>
               
                <div className="notify">
                    <CardNotify
                        avatar={true}
                        displayName=""
                        text=""
                        Icon={FavoriteIcon}
                        color="lightgrey"
                    />
                </div>
                </div>

                {/* Feed Options */}
                <div className="feed__Container">
                    <div className="feed__Options">
                        <FeedOption Icon={KeyboardArrowDownOutlinedIcon} title="World" />
                        <FeedOption Icon={KeyboardArrowDownOutlinedIcon} title="Following" />
                        <FeedOption Icon={KeyboardArrowDownOutlinedIcon} title="Popular" />
                        <FeedOption Icon={KeyboardArrowDownOutlinedIcon} title="Post" />
                        <FeedOption Icon={KeyboardArrowDownOutlinedIcon} title="Gender" />
                        <FeedOption Icon={KeyboardArrowDownOutlinedIcon} title="Location" />
                        <FeedOption Icon={KeyboardArrowDownOutlinedIcon} title="Profession" />
                    </div>
                </div>

                {/* Posts First*/}
                <div className="image__Home">
                    <div className="image__Row">
                        <ImageCard
                            name="William, 28"
                            Icon={LocationOnOutlinedIcon}
                            location="New York"
                            image="https://images.unsplash.com/photo-1551022372-0bdac482b9d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym95c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                        <ImageCard
                            name="Martin, 24"
                            Icon={LocationOnOutlinedIcon}
                            location="Texas,USA"
                            image="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                        <ImageCard
                            name="Jack, 22"
                            Icon={LocationOnOutlinedIcon}
                            location="Florida, USA"
                            image="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                        <ImageCard
                            name="Micheal, 26"
                            Icon={LocationOnOutlinedIcon}
                            location="Madrid, Spain"
                            image="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                        <ImageCard
                            name="Manuel, 28"
                            Icon={LocationOnOutlinedIcon}
                            location="Rome, Italy"
                            image="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                    </div>
                </div>
                {/* Posts  Second*/}
                <div className="image__Home">
                    <div className="image__Row">
                        <ImageCard
                            name="William, 28"
                            Icon={LocationOnOutlinedIcon}
                            location="New York"
                            image="https://images.unsplash.com/photo-1551022372-0bdac482b9d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym95c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                        <ImageCard
                            name="Martin, 24"
                            Icon={LocationOnOutlinedIcon}
                            location="Texas,USA"
                            image="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym95c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                        <ImageCard
                            name="Jack, 22"
                            Icon={LocationOnOutlinedIcon}
                            location="Florida, USA"
                            image="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                        <ImageCard
                            name="Micheal, 26"
                            Icon={LocationOnOutlinedIcon}
                            location="Madrid, Spain"
                            image="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                        <ImageCard
                            name="Manuel, 28"
                            Icon={LocationOnOutlinedIcon}
                            location="Rome, Italy"
                            image="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        />

                    </div>
                </div>
                {/* Posts */}

            </div>
        </>
    )
}

export default Feed
