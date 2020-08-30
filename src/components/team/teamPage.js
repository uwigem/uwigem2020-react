import './teamPage.css';
import TeamMember from './teamMember';
import React, {useState, useEffect} from 'react';

/**
 * @returns {React.Component}
 */
const TeamPage = props => {
  // switch between team & members
  const [membersPage, setMembersPage] = useState(false);


  const currentYear = 2020;
  const [teamMembers, setTeamMembers] = useState([]);
  const [filter, setFilter] = useState('All');
  const [year, setYear] = useState(currentYear);

  let years = [2019, 2020];

  let teams = [
    "All",
    "Drylab",
    "Wetlab",
    "Human Practices",
    "Outreach",
    "Web Development",
    "Fundraising",
    "Design",
    "Adviser",
    "PIs"]


  useEffect(() => {
    let data = require('./team_members.json');

    // sort by name
    data.sort((a, b) => a.name.localeCompare(b.name));
    
    setTeamMembers(data);
    }, []);

  const switchPage = () => {
    setMembersPage(!membersPage);
  }

  let mentors = [
    {
      name: 'a',
      description: 'a description'
    },
    {
      name: 'b',
      description: 'b description'
    }
  ];

  return <>
    <div className='team-root'>
      <div className='team-header'>

      {
        membersPage?
          <>
          <div className='team-header-title'>
            <h1>Our Team</h1>
          </div>

          <div className='team-header-button'>
            <button onClick={switchPage}>Members</button>
          </div>
          </>
        :
          <>

          <div className='team-header-title'>
            <h1>Our Members</h1>
          </div>

          <div className='team-header-button'>
            <button onClick={switchPage}>Team</button>
          </div>

          </>
      }

      </div>

      <div className='team-body'>
        {
          membersPage?
            <>
            
            <div className='team-mentors'>
              <div className='team-mentors-title'>
                <h3>Mentors</h3>
              </div>

              <div className='team-mentors-card-container'>
              {
                mentors.map(m => (<div className='team-mentors-card'>
                  
                </div>))
              }
              </div>
            </div>
            
            </>
          :
            <></>
        }
      </div>
    </div>
  </>;
}

export default TeamPage;