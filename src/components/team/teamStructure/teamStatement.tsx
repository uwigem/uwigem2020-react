import React from 'react';
import Fade from 'react-reveal/Fade';
import './teamStatement.css';

type propsType = {
    teamName: string,
    statement: string,
    highlight: string,
    statementMore: string,
    example: string
}

/**
 * @param teamName the name of the team to be displayed
 * @param statement the team statment, what they says
 * @param highlight highlighted portion of the team statement
 * @param statementMore the rest of the team statment after the highlights
 * @param example the deliverable examples of the team
 * @returns {React.Component}
 */
export default function TeamStatement({ teamName, statement, highlight, statementMore, example}: propsType) {

    return <>
        <div className="team-statement-div">
            <Fade duration={1200}>
            <div className="team-statement-title">{teamName} Team Says:</div>
            <div className="team-statement-main">
                {statement}
                <b><i>{highlight}</i></b>
                {statementMore}</div>
            {/* <div className="team-statement-example">
            <b>Our Deliverable Examples: </b>
            {example}    
            </div> */}
            {/* <div className="team-statement-link" a>View Our Team Members</div> */}
            </Fade>
		</div>
    </>;
}