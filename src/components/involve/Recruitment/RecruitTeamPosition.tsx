import React from 'react';
// import Fade from 'react-reveal/Fade';
import './RecruitTeamPostion.css';

type propsType = {
    teamName: string,
    positions: position[]
}

type position = {
    name: string,
    description: string,
}

/**
 * @param teamName the name of the team to be displayed
 * @param positions positions provided
 * @returns {React.Component}
 */
export default function RecruitTeamPostion(
    { 
        teamName,
        positions
    }: propsType) {

    console.log(positions);

    const allPositions = positions.map((element) => 
		<div>
            <div className="recruit-team-position-name">
                <b>Position Name: </b> {element.name}
            </div>
            <div className="recruit-team-position-description">
                <b>Position Description: </b> 
                <div dangerouslySetInnerHTML={{__html: element.description}}></div>
            </div>
            <br/>
        </div>
	);

    return <>
        <div className="recruit-team-position-div">
        {allPositions}
		</div>
    </>;
}