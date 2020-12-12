import React from 'react';
import Fade from 'react-reveal/Fade';
import './RecruitTeamPostion.css';

type propsType = {
    teamName: string,
    statement: string,
    highlight: string,
    statementMore: string,
    example: string,
    position: string,
    description: string
}

/**
 * @param teamName the name of the team to be displayed
 * @param statement the team statment, what they says
 * @param highlight highlighted portion of the team statement
 * @param statementMore the rest of the team statment after the highlights
 * @param example the deliverable examples of the team
 * @returns {React.Component}
 */
export default function RecruitTeamPostion(
    { 
        teamName, 
        statement, 
        highlight, 
        statementMore, 
        example,
        position,
        description,
    }: propsType) {

    return <>
        <div className="recruit-team-position-div">
            <Fade duration={1200}>
            <div className="recruit-team-position-title">{teamName} Team Wants:</div>
            <div className="recruit-team-position-main">
                {statement}
                <b><i>{highlight}</i></b>
                {statementMore}</div>
            <div className="recruit-team-position-name">
                <b>Position Name: </b> {position}
            </div>
            <div className="recruit-team-position-description">
                <b>Position Description: </b> 
                <div>{description}</div>
            </div>
            <div className="recruit-team-position-example">
                <b>Our Deliverable Examples: </b>
                {example}</div>
            </Fade>
		</div>
    </>;
}