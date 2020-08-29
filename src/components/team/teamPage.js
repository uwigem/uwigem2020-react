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

  return <>
    <div className='team-root'>
      <div className='team-header'>
      {
        membersPage?
          <>
          <h1>Our Team</h1>
          <button onClick={switchPage}>Members</button>
          </>
        :
          <>
          <h1>Our Members</h1>
          <button onClick={switchPage}>Team</button>
          </>
      }
      </div>

      <div className='team-body'>
        {
          membersPage?
            <></>
          :
            <></>
        }
      </div>
    </div>
  </>;
}

export default TeamPage;