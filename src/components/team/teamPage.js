import './teamPage.css';
import TeamMember from './teamMember';
import React, {useState, useEffect} from 'react';

/**
 * @returns {React.Component}
 */
const TeamPage = props => {
    const currentYear = 2019;
    const [teamMembers, setTeamMembers] = useState([]);
    const [filter, setFilter] = useState('All');
    const [year, setYear] = useState(currentYear);
    let data = require('./team_members.json');
    let years = [2019, 2020];
    let teams = ["All",
        "Drylab",
        "Wetlab",
        "Human Practices",
        "Outreach",
        "Web Development",
        "Fundraising",
        "Design",
        "Adviser",
        "PIs"]

    
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
                    {years.map(y => {
                        return <button onClick={() => setYear(y)}>{y}</button>
                    })}
                </div>
            </div>Team</h1>
        </div>
        
        <body >
            <div className="teams">
                {teams.map(team => {
                    return <button 
                        onClick={() => setFilter(team)}
                        class="team-button">{team}</button>
                })}
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