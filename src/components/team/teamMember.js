import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars';

/**
 * @returns {React.Component}
 */
const TeamMember = props => {
    const [expanded, toggleExpand] = useState(false);
    const [hover, toggleHover] = useState(false);
    
    return <>
        <div className="person" 
            onClick={() => toggleExpand(!expanded)}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            style={{
                backgroundColor: hover || expanded ? '#4D2393' : 'white',
                transition: 'height 0.5s, background-color 0.5s, color 0.5s',
                color: hover || expanded ? 'white' : 'black',}}
            >
            <Fade duration={500} clear when={!expanded} top>
                <section className="person-image">
                    <img src="http://placekitten.com/380/380"></img>
                </section>
                <section className="person-name">{props.person.name}</section>
                <section className="person-team">{props.person.teams.slice(1).toString()}</section>
            </Fade>
            <section className="person-bio">
                <Scrollbars style={{
                        position: 'absolute',
                        margin: 'auto',
                        left: 0,
                        right: 0,
                        textAlign: 'center',
                        width: '300px',
                        height: '24rem',
                        opacity: expanded? 1 : 0,
                    }}>
                    <Fade duration={500} clear when={expanded} bottom>
                        <div style={{
                            padding: 20,
                            fontSize: 16,
                        }}>
                            <p>{props.person.bio}</p>
                            <div>
                                {props.person.github &&
                                    <a href={props.person.github} target="_blank" className="bio-icon">
                                        <FontAwesomeIcon icon={faGithub} size={"2x"} />
                                    </a>}
                                {props.person.linkedin &&
                                    <a href={props.person.linkedin} target="_blank" className="bio-icon">
                                        <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                                    </a>}
                            </div> 
                        </div>
                    </Fade>
                </Scrollbars>  
            </section>
                
        </div>
    </>;
}

export default TeamMember;