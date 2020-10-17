import React, { useState, useRef } from 'react'
import TeamPageSideBar from './TeamPageSideBar';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Mentors from './membersPage/Mentors';
import Members from './membersPage/Members';
import { MAIN_SECTION_DESCRIPTION } from '../_data/HomepageData/HomepageConstants';

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


  return (
    <div>
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
      <Row md={12} sm={1}>
          <Col md={3} className={'justify-content-center'}>
            <TeamPageSideBar sectionList={sections} />
          </Col>
          <Col md={9}>
            <main>
              <section ref={mentorsRef} id={mentorsId} >
                <Mentors />
              </section>
              <section ref={membersRef} id={membersId}>
                <Members />
              </section>
            </main>
          </Col>
        </Row>
        <TeamPageSideBar sectionList={sections} />
        
        
          
        

      </div>  
    </div>
  )
}