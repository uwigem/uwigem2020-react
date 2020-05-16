import './teamPage.css';
import TeamMember from './teamMember';
import React, {useState, useEffect} from 'react';

/**
 * @returns {React.Component}
 */
const TeamPage = props => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [filter, setFilter] = useState('All');
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
        <h1 className="header">Meet the Team</h1>
        <body>
            <div className="teams">
                <seciton className="col-xs">
                    <button onClick={() => setFilter('Adviser')}>
                        Adviser
                    </button>
                </seciton>
                <seciton className="col-xs">
                    All
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
                    Wetlab
                </seciton>
                <seciton className="col-xs">
                    <button onClick={() => setFilter('Web Developer')}>
                        Web Development
                    </button>
                </seciton>
            </div>
            <div className="team-members">
                {teamMembers.map(person => {
                    return <TeamMember key={person.id} person={person} filter={filter}/>;
                })}
            </div>
        </body>
    </>;
}

export default TeamPage;