import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Scrollbars } from 'react-custom-scrollbars';
import { Modal } from 'react-bootstrap';
import gmail from '../../../gmail.svg';
import gmailInactive from '../../../gmailInactive.svg';

// expects a "person" prop

/**
 * @returns {React.Component}
 */
const TeamMember = props => {
    const [expanded, toggleExpand] = useState(false);
    
    return <>
        <div className="person" onClick={() => toggleExpand(!expanded)}>
            <section className="person-image">
                <img src={props.person.picture}></img>
            </section>
            <section className="person-name">{props.person.name}</section>
            {/* first element of person.teams is always 'all' */}
            <Modal
                className="member-card"
                show={expanded}
                onHide={() => toggleExpand(!expanded)}
                size="lg"
                centered
            >
                <Modal.Body className="card-body">
                    <img className="card-image" src={props.person.picture}></img>
                    <div className="card-content">
                        {
                            props.person.pronouns?
                            <>
                                <p className='card-pronouns'>
                                    <b className='card-name'>
                                        {props.person.name}
                                    </b>
                                    {" (" + props.person.pronouns + ")"}
                                </p>
                            </>

                            :

                            <>
                                <p className='card-name'>{props.person.name}</p>
                            </>
                        }
                        <p className="card-text">
                            Major:
                            <b className='card-info'>
                                {" " + props.person.major}
                            </b>
                        </p>
                        <p className="card-text">Focus:
                            <b className='card-info'>
                                {props.person.teams.slice(1).map(s => " " + s).toString()}
                            </b>
                        </p>
                        {
                            props.person.bio?
                                <>
                                    <p className="card-bio">
                                        {"\"" + props.person.bio + "\""}
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
                                    <img src={gmail} className='contact-logo'/>
                                </a>
                            </>

                            :

                            <>
                                <img src={gmailInactive} className='contact-logo'/>
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

export default TeamMember;