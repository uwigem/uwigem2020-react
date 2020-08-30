import React from 'react';
import Fade from 'react-reveal/Fade';
import './teamStatement.css';

/**
 * @param teamName the name of the team to be displayed
 * @param statement the team statment, what they says
 * @param highlight highlighted portion of the team statement
 * @param statementMore the rest of the team statment after the highlights
 * @param example the deliverable examples of the team
 * @returns {React.Component}
 */
const TeamStatement = (props) => {

    return <>
        <div className="team-statement-div">
            <Fade duration={1200}>
            <div className="team-statement-title">{props.teamName} Team Says:</div>
            <div className="team-statement-main">
                {props.statement}
                <b><i>{props.highlight}</i></b>
                {props.statementMore}</div>
            <div className="team-statement-example">
                <b>Our Deliverable Examples: </b>
                {props.example}</div>
            <div className="team-statement-link">View Our Team Members</div>
            </Fade>
		</div>
    </>;
}

export default TeamStatement;