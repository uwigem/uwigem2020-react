import React from 'react';
import TeamStructure from './teamStructure/teamStructure'
import TeamOverview from './teamOverview/teamOverview'
import __ReactFlexboxGrid from 'react-flexbox-grid';
import './OurTeamPage.css';

/**
 * @returns {React.Component}
 */
const OurTeamPage = (props) => {
    return <>
        <h1 className="our-team-title">Our Team</h1>
        <hr className="our-team-linebar"></hr>
        <div 
            style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}
        >
            <div style={{width:'25%'}}>Sidebar</div>
            <div>
            <TeamOverview 
                overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim integer sit lacinia ac tempus enim libero, sed nisl. Mattis integer consectetur vel, cursus lacus, consequat, adipiscing. Risus, id id bibendum turpis sit sit. Duis tortor sed erat sed arcu at."
                imgSrc="PlaceholderImage/arknights5.jpg"
                imgAlt="Placeholder Image"
                caption="Caption: caption goes here"
            />
            <TeamStructure />
            </div>
        </div>
    </>
}

export default OurTeamPage;