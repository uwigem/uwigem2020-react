import React from 'react';
import './teamOverview.css'

/**
 * @param overview text for the team overview
 * @param imgSrc file path for the image displayed
 * @param imgAlt description of the image
 * @param caption caption for the image
 * @returns {React.Component}
 */
const TeamOverview = (props) => {
    return <>
        <div className="team-overview-div">
            <h3 className="team-overview-title">Overview</h3>
            <div className="team-overview-content">{props.overview}</div>
            <img className="team-overview-img"
                src={props.imgSrc}
                alt={props.imgAlt} />
            <div className="team-overview-img-caption">
                {props.caption}
            </div>
        </div>
    </>
}

export default TeamOverview;