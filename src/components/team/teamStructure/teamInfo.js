import React, {useState} from 'react';
import './teamInfo.css';

/**
 * @param teamName the Name of the team to be displayed
 * @param handleClick handle the case when client clicks the team
 * @returns {React.Component}
 */
const TeamInfo = (props) => {

    const [hover, toggleHover] = useState(false);

    return <>
        <div 
            className="team-info-div"
            onClick={() => {props.handleClick(props.teamName);}}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            style={{
                backgroundColor: hover ? '#dbdbdb' : 'white'
            }}
        >
            <h4 className="team-info-title">{props.teamName}</h4>
		</div>
    </>;
}

export default TeamInfo;