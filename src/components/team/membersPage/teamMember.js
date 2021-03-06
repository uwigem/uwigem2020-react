import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Modal } from 'react-bootstrap';
import gmail from '../../../gmail.svg';
import gmailInactive from '../../../gmailInactive.svg';
import './teamMember.css';
import logo from './web-logo.png';
import './membersPageCardsShared.css';

// expects a "person" prop

/**
 * @returns {React.Component}
 */
const TeamMember = props => {
    const [expanded, toggleExpand] = useState(false);

    return <>
        {/* Member card */}
        <div className="person" onClick={() => toggleExpand(!expanded)}>
            <section className="person-image">
                <img src={props.person.picture? props.person.picture : logo} alt={props.person.name} />
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
                {/* Pop-up when clicking member */}
                <Modal.Body className="card-body">
                    <div className="card-image">
                        <img src={props.person.picture? props.person.picture : logo} alt={props.person.name} />
                    </div>
                    <div className="card-content">
                        {
                            props.person.pronouns?
                            <>
                                <p className='card-name'>
                                    {props.person.name}
                                    <span class='card-pronouns'>
                                    {"(" + props.person.pronouns + ")"}
                                    </span>
                                </p>
                            </>

                            :

                            <>
                                <p className='card-name'>{props.person.name}</p>
                            </>
                        }
                        <p className="member-section">
                            Major:
                            <b className='card-info'>
                                {" " + props.person.major}
                            </b>
                        </p>
                        <p className="member-section">Focus:
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
                                        <img src={gmail} className='card-logo' alt={'gmail'}/>
                                    </a>
                                </>

                                :

                                <>
                                    <img src={gmailInactive} className='card-logo' alt={'gmail unavailable'}/>
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
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    </>;
}

export default TeamMember;