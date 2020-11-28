import React, {useState} from 'react';
import './RecruitTeamInfo.css';

type propsType = {
    teamName: string,
    onClick: (teamName: string) => void
}

/**
 * @param teamName the Name of the team to be displayed
 * @param onClick handle the case when client clicks the team
 * @returns {React.Component}
 */
export default function RecruitTeamInfo({ teamName, onClick }: propsType) {

    const [hover, toggleHover] = useState(false);

    return <>
        <div 
            className="recruit-team-info-div"
            onClick={() => onClick(teamName)}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            style={{
                backgroundColor: hover ? '#dbdbdb' : 'white',
                cursor: hover? 'pointer' : 'default'
            }}
        >
            <h4 className="recruit-team-info-title">{teamName}</h4>
		</div>
    </>;
}