import React, { useState, useEffect, useRef } from 'react'
import UnderConstruction from '../construction/UnderConstruction'
import TeamPageSideBar from './TeamPageSideBar';

export default function TeamPageMembers({ onSwitchClick }) {

  const currentYear = 2020;
  const [teamMembers, setTeamMembers] = useState([]);
  const [filter, setFilter] = useState('All');
  const [year, setYear] = useState(currentYear);

  const sections = [
    {
      name: 'sectionName1',
      ref: useRef()
    },
    {
      name: 'sectionName2',
      ref: useRef()
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


  useEffect(() => {
    let data = require('./team_members.json');

    // sort by name
    data.sort((a, b) => a.name.localeCompare(b.name));
    
    setTeamMembers(data);
  }, []);

  return (
    <main>
      <header className='team-header'>
        <div className='team-header-title'>
            <h1>Our Members</h1>
          </div>
          <div className='team-header-button'>
            <button onClick={onSwitchClick}>Team</button>
          </div>
      </header>
      <div className='team-body'>
        <TeamPageSideBar sectionList={[]} />
        <UnderConstruction/>
      </div>  
    </main>
  )
}