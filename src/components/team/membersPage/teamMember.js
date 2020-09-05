import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars';
import { Modal } from 'react-bootstrap';

// expects a "person" prop

/**
 * @returns {React.Component}
 */
const TeamMember = props => {
    const [expanded, toggleExpand] = useState(false);
    
    return <>
        <div className="person" onClick={() => toggleExpand(!expanded)}>
            <section className="person-image">
                <img src="http://placekitten.com/380/380"></img>
            </section>
            <section className="person-name">{props.person.name}</section>
            {/* first element of person.teams is always 'all' */}

            <Modal
                show={expanded}
                onHide={() => toggleExpand(!expanded)}
                size="lg"
                centered
            >
                <Modal.Body>
                    <img src="http://placekitten.com/380/380" style={{float: 'left',}}></img>
                    <p>{props.person.name}</p>
                    <p>Major: {props.person.major}</p>
                    <p>Focus: {props.person.teams.toString()}</p>
                </Modal.Body>
            </Modal>
                
        </div>
    </>;
}

export default TeamMember;