import React from 'react';
import './teamOverview.css'


type propsType = {
    overview: string,
    imgSrc: string,
    imgAlt: string,
    caption: string
}


/**
 * @param overview text for the team overview
 * @param imgSrc file path for the image displayed
 * @param imgAlt description of the image
 * @param caption caption for the image
 * @returns {React.Component}
 */
export default function TeamOverview({ overview, imgSrc, imgAlt, caption }: propsType) {
    return <>
        <div className="team-overview-div">
            <h3 className="team-overview-title">Overview</h3>
            <div className="team-overview-content">{overview}</div>
            <img className="team-overview-img"
                src={imgSrc}
                alt={imgAlt} />
            <div className="team-overview-img-caption">
                {caption}
            </div>
        </div>
    </>
}