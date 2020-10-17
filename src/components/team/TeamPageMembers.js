import React, { useRef } from 'react'
import TeamPageSideBar from './TeamPageSideBar';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Mentors from './membersPage/Mentors';
import Members from './membersPage/Members';

export default function TeamPageMembers({ onSwitchClick }) {

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