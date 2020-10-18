import React, { useEffect, useRef } from 'react';
import TeamOverview from './teamOverview/teamOverview'
import TeamStructure from './teamStructure/teamStructure'
import TeamPageSideBar from './TeamPageSideBar';
import TeamGallery from './gallery/gallery';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { section } from './teamPage'

type propsType = {
  handleSection: (sections: section[]) => void
}

/**
 * Displays team members page
 * @param {function} onSwitchClick A callback for when the switch pages is clicked
 */
export default function TeamPageTeam({ handleSection }: propsType) {
  
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

  useEffect(() => {
    handleSection(sections)
  }, [])
  
  return (
    <div className={'team-body'}>
      <Row md={12} sm={1}>
        <Col md={3} className={'justify-content-center'}>
          <TeamPageSideBar sectionList={sections} />
        </Col>
        <Col md={9}>
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
  )
}