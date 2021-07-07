import React from 'react'
import './ImageCard.css'

function ImageCard({ name, image, Icon, location }) {
    return (
        <div className="card">
            <img className="card--image"
                src={image} alt=" " 
            />

            <div className="card__content">
                <h3 className="card__name" >{name}</h3>
                <div className="card__small">
                <p ><small><Icon/></small></p>
                <p><small>{location}</small></p>
                </div>
            </div>
        </div>
    )

}

export default ImageCard
