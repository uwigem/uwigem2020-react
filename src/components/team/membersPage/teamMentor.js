import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Modal } from 'react-bootstrap';
import gmail from '../../../gmail.svg';
import gmailInactive from '../../../gmailInactive.svg';
import './teamMentor.css';

// expects a "person" prop

/**
 * @returns {React.Component}
 */
const TeamMentor = props => {
    const [expanded, toggleExpand] = useState(false);
    
    return <>
        {/* Mentor card */}
        <div className="person" onClick={() => toggleExpand(!expanded)}>
            <section className="person-image">
                <img src={props.person.picture} alt={props.person.name} />
            </section>
            <Modal
                show={expanded}
                onHide={() => toggleExpand(!expanded)}
                size="lg"
                centered
            >
                {/* Pop-up when clicking member */}
                <Modal.Body className="card-body">
                    <img className="card-image" src={props.person.picture} alt={props.person.name} />
                    <div className="card-content">
                        {
                            props.person.pronouns?
                            <>
                                <span>
                                    <p className='card-name'>
                                        {props.person.name}
                                        <span class='card-pronouns'>
                                        {"(" + props.person.pronouns + ")"}  
                                        </span>
                                    </p>
                                </span>
                            </>

                            :

                            <>
                                <p className='card-name'>{props.person.name}</p>
                            </>
                        }
                        
                        {
                            props.person.project?
                                <>
                                    <p className='mentor-section'>Related Project</p>
                                    <p className='card-info'>
                                        {props.person.project}
                                    </p>
                                </>
                            :
                                <>
                                </>
                        }

                        {
                            (props.person.publications) ?
                                <>
                                    <p className='mentor-section'>Publications</p>
                                    <p className="card-info">
                                        {props.person.publications.map(s => " " + s).toString()}
                                    </p>
                                </>
                            :
                                <>
                                </>
                        }
                    </div>
                    <div className='card-links'>
                        {
                            props.person.linkedin?

                            <>
                                <a href={props.person.linkedin}>
                                    <FontAwesomeIcon icon={faLinkedin} size={"3x"} color={"black"} className='card-logo'/>
                                </a>
                            </>

                            :

                            <>
                                <FontAwesomeIcon icon={faLinkedin} size={"3x"} color={"grey"} className='card-logo'/>
                            </>
                        }

                        {
                            props.person.contact?

                            <>
                                <a href={"mailto:" + props.person.contact}>
                                    <img src={gmail} className='contact-logo' alt={'gmail'}/>
                                </a>
                            </>

                            :

                            <>
                                <img src={gmailInactive} className='contact-logo' alt={'gmail unavailable'}/>
                            </>
                        }
                        

                        {
                            props.person.github?

                            <>
                                <a href={props.person.github}>
                                    <FontAwesomeIcon icon={faGithub} size={"3x"} color={"black"} className='card-logo'/>
                                </a>
                            </>

                            :

                            <>
                                <FontAwesomeIcon icon={faGithub} size={"3x"} color={"grey"} className='card-logo'/>
                            </>
                        }
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    </>;
}

export default TeamMentor;