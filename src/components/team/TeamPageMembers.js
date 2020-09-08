import React, { useState, useEffect, useRef } from 'react'
import UnderConstruction from '../construction/UnderConstruction'
import TeamPageSideBar from './TeamPageSideBar';

import Mentors from './membersPage/Mentors';
import Members from './membersPage/Members';

export default function TeamPageMembers({ onSwitchClick }) {

  const currentYear = 2020;
  const [teamMembers, setTeamMembers] = useState([]);
  const [filter, setFilter] = useState('All');
  const [year, setYear] = useState(currentYear);

  const mentorsRef = useRef(null);
  const membersRef = useRef(null);
  const mentorsId = 'team-page-mentors'
  const membersId = 'team-page-members'
  const sections = [
    {
      name: 'Mentors',
      id: mentorsId,
      ref: mentorsRef
    },
    {
      name: 'Members',
      id: membersId,
      ref: membersRef
    }
  ]

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


  /*
  useEffect(() => {
    let data = require('./team_members.json');

    // sort by name
    data.sort((a, b) => a.name.localeCompare(b.name));
    
    setTeamMembers(data);
  }, []);
  */

  return (
    <main>
      <header className='team-header'>
        <div className='team-header-title'>
            <h1>Our Members</h1>
          </div>
          <div className='team-header-button'>
            <button onClick={onSwitchClick}>View Team</button>
          </div>
      </header>
      <hr className="team-header-linebar"></hr>
      <div className='team-body'>
        <TeamPageSideBar sectionList={sections} />
        
        <main>
          <section ref={mentorsRef} id={mentorsId} >
            <Mentors />
          </section>
          <section ref={membersRef} id={membersId}>
            <Members />
          </section>
        </main>

      </div>  
    </main>
  )
}