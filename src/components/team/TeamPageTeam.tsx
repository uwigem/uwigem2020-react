import React, { useEffect, useRef } from 'react'
import TeamOverview from './teamOverview/teamOverview'
import TeamStructure from './teamStructure/teamStructure'
import TeamGallery from './gallery/gallery'
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
  }, [sections, handleSection])
  
  return (
    <main>
      <section ref={overviewRef} id={overviewId}>
        <TeamOverview
          overview="International Genetically Engineering Machine (iGEM) is the premiere international synthetic biology student research competition. Started at MIT in 2004, it now includes over 300 student teams from all over the world. UW's iGEM team has been attending the iGEM competition since 2008. In 2011, we won the grand prize.
          
          Each annual season, starting in late winter and ending in late fall culminating in the international conference event, UW iGEM creates, plans, and executes a research project related to synthetic biology. Synthetic biology is a cutting-edge field of biotechnology that is extremely interdisciplinary, requiring not just biologists and chemists, but also electrical engineers, programmers, machinists, designers, business-oriented students, and many more. We welcome all disciplines into the team and take pride in how its interdisciplinary nature. Besides the research project, a large aspect of each project is scientific outreach and involvement of the greater public."
          imgSrc="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/74355244_2550244068554119_5313862172881715200_o.jpg?_nc_cat=107&ccb=2&_nc_sid=8024bb&_nc_ohc=WLkaFpu3OWYAX9Kyn6C&_nc_ht=scontent-sea1-1.xx&oh=d17e0bbf5be6accdaa7206c9f3a95cb0&oe=5FE9D82A"
          imgAlt="iGEM Team"
          caption="UW iGEM Team"/>
      </section>
      <section ref={teamStructRef} id={teamStructureId}>
        <TeamStructure />
      </section>
      <section>
        <TeamGallery />
      </section>
    </main>
  )
}