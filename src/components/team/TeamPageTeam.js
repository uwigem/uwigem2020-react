import React, { useRef } from 'react';
import TeamOverview from './teamOverview/teamOverview'
import TeamStructure from './teamStructure/teamStructure'
import TeamPageSideBar from './TeamPageSideBar';
import TeamGallery from './gallery/gallery';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

/**
 * Displays team members page
 * @param {function} onSwitchClick A callback for when the switch pages is clicked
 */
export default function TeamPageTeam({ onSwitchClick }) {
  
  const overviewRef = useRef(null)
  const teamStructRef = useRef(null)
  const overviewId = 'team-page-team-overview'
  const teamStructureId = 'team-page-team-structure'
  const sections = [
    {
      name: 'Overview',
      id: overviewId,
      ref: overviewRef
    },
    {
      name: 'Team Structure',
      id: teamStructureId,
      ref: teamStructRef
    }
  ]
  return (
    <>
      <header className='team-header'>
        <div className='team-header-title'>
            <h1>Our Team</h1>
          </div>
          <div className='team-header-button'>
            <button onClick={onSwitchClick}>View Members</button>
          </div>
      </header>
      <hr className="team-header-linebar"></hr>
      <div className={'team-body'}>
        <Row md={12} sm={1}>
          <Col md={2} className={'justify-content-center'}>
            <TeamPageSideBar sectionList={sections} />
          </Col>
          <Col md={10}>
            <section ref={overviewRef} id={overviewId}>
              <TeamOverview
                overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim integer sit lacinia ac tempus enim libero, sed nisl. Mattis integer consectetur vel, cursus lacus, consequat, adipiscing. Risus, id id bibendum turpis sit sit. Duis tortor sed erat sed arcu at."
                imgSrc="https://placekitten.com/970/431"
                imgAlt="Placeholder Image"
                caption="Caption: caption goes here"/>
            </section>
            <section ref={teamStructRef} id={teamStructureId}>
              <TeamStructure />
            </section>
            <section>
              <TeamGallery />
            </section>
          </Col>
        </Row>
      </div>
      <div className='team-body'>
        <TeamPageSideBar sectionList={sections} />
        <main>
          
        </main>
      </div>
    </>
  )
}