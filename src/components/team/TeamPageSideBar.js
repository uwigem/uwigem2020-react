import React from 'react'
import './TeamPageSideBar.css'

/*
 * section list in the form [{ name: 'name', ref: React.Ref }]
 */
export default function TeamPageSideBar({ sectionList }) {
  return (
    <>
    {sectionList && sectionList.length > 0 &&
      <nav className={'team-page-side-bar'}>
        <ul>
          {sectionList.map(headingToLink)}
        </ul>
      </nav>}
    </> 
  )
}


const headingToLink = (section) => {
  return (
    <li key={section.name} onClick={() => scrollToRef(section.ref)}>
      {section.name}
    </li>
  )
}

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)