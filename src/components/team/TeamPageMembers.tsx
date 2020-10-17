import React, { useRef } from 'react'
import TeamPageSideBar from './TeamPageSideBar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Mentors from './membersPage/Mentors'
import Members from './membersPage/Members'
import { section } from './teamPage'

type propsType = {
  handleSection: (sections: section[]) => void
}

export default function TeamPageMembers({ handleSection }: propsType) {

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

  handleSection(sections)

  return (
    <div>
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