import './teamPage.css';
import TeamMember from './teamMember';
import React, {useState, useEffect} from 'react';
//import { Grid, Col, Row } from 'react-flexbox-grid';
//import Fade from 'react-reveal/Fade';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//import { Scrollbars } from 'react-custom-scrollbars';

/**
 * @returns {React.Component}
 */
const TeamPage = props => {
    const currentYear = 2019;
    const [teamMembers, setTeamMembers] = useState([]);
    const [filter, setFilter] = useState('All');
    const [year, setYear] = useState(currentYear);
    let data = require('./team_members.json');

    
    // const fetchData = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then(people => {
    //         setLoadedPeople(people);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    // };

    useEffect(() => {
        //fetchData();
        setTeamMembers(data);
      }, []);


    return <>
        <div>
            <h1 className="header">Meet the 
            <div class="dropdown">
                <button class="dropbtn">{year}</button>
                <div class="dropdown-content">
                    <button onClick={() => setYear(2019)}>2019</button>
                    <button onClick={() => setYear(2020)}>2020</button>
                </div>
            </div>Team</h1>
        </div>
        
        <body>
            <div className="teams">
                <seciton className="col-xs">
                    <button onClick={() => setFilter('Adviser')}>
                        Adviser
                    </button>
                </seciton>
                <seciton className="col-xs">
                    <button onClick={() => setFilter('All')}>
                    All
                    </button>
                </seciton>
                <seciton className="col-xs">
                    <button onClick={() => setFilter('Business')}>
                        Business
                    </button>
                </seciton>
                <seciton className="col-xs">
                    Collaborations
                </seciton>
                <seciton className="col-xs">
                    Design
                </seciton>
                <seciton className="col-xs">
                    Drylab
                </seciton>
                <seciton className="col-xs">
                    Leadership
                </seciton>
                <seciton className="col-xs">
                    Outreach
                </seciton>
                <seciton className="col-xs">
                    PI
                </seciton>
                <seciton className="col-xs">
                    Presenters
                </seciton>
                <seciton className="col-xs">
                    <button onClick={() => setFilter('Wetlab')}>
                        Wetlab
                    </button>
                </seciton>
                <seciton className="col-xs">
                    <button onClick={() => setFilter('Web Developer')}>
                        Web Development
                    </button>
                </seciton>
            </div>
            <div className="team-members">
                {teamMembers.filter(
                    person => person.year.indexOf(year) >= 0 
                    && person.teams.indexOf(filter) >= 0)
                .map(person => {
                    return <TeamMember key={person.id} person={person} filter={filter}/>;
                })}
            </div>
        </body>
    </>;
}

export default TeamPage;