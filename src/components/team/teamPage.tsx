import 'bootstrap/dist/css/bootstrap.css';
import './teamPage.css';
import React, { useState } from 'react';
import TeamPageMembers from './TeamPageMembers';
import TeamPageTeam from './TeamPageTeam';
import TeamPageSideBar from './TeamPageSideBar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export type section = {
  name: string,
  id: string,
  ref: React.RefObject<HTMLElement>
}

type pageData = {
  title: string,
  switchBtnText: string,
  component: (setSections: (sections: section[]) => void) => JSX.Element
}

const teamPageData: pageData = {
  title: 'Our Team',
  switchBtnText: 'View Members',
  component: (setSections: (sections: section[]) => void) => <TeamPageTeam handleSection={setSections}/>
}

const membersPageData = {
  title: 'Our Members',
  switchBtnText: 'View Team',
  component: (setSections: (sections: section[]) => void) => <TeamPageMembers handleSection={setSections}/>
}

/**
 * @returns {React.Component}
 */
export default function TeamPage() {
  // switch between team & members
  const [displayedPage, setDisplayedPage] = useState(teamPageData);
  const [sections, setSection] = useState<section[]>([])

  const getSections = (sections: section[]) => setSection(old => old[0]?.id !== sections[0].id ? sections : old)

  const switchPage = () => {
    setDisplayedPage(oldPage => (oldPage === teamPageData ? membersPageData : teamPageData))
  }

  return (
    <div className='team-root'>
      <header className='team-header'>
        <div className='team-header-title'>
            <h1>{displayedPage.title}</h1>
          </div>
          <div className='team-header-button'>
            <button onClick={switchPage}>{displayedPage.switchBtnText}</button>
          </div>
      </header>
      <hr className="team-header-linebar"></hr>
      <div className='team-body'>
        <Row md={12} sm={1}>
          <Col md={3} className={'justify-content-center'}>
            <TeamPageSideBar sectionList={sections} />
          </Col>
          <Col md={9}>
            {displayedPage.component(getSections)}
          </Col>
        </Row>
      </div>  
    </div>
  )
}