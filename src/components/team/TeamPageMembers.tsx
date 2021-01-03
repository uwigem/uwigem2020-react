import React, { useEffect, useRef } from 'react'
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
  // eslint-disable-next-line
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

  useEffect(() => {
    handleSection(sections)
  }, [sections, handleSection])

  return (
    <main>
      <section ref={mentorsRef} id={mentorsId} >
        <Mentors />
      </section>
      <section ref={membersRef} id={membersId}>
        <Members />
      </section>
    </main>
  )
}