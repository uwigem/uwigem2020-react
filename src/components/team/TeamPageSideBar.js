import React,  { useEffect, useState } from 'react'
import './TeamPageSideBar.css'

/*
 * section list in the form [{ name: 'name', id: 'id-tag', ref: React.Ref }]
 * all sections must have an id tag same with the id field
 */
export default function TeamPageSideBar({ sectionList }) {
  const [sectionRatios, setSectionRatios] = useState({})

  const handleObserve = (entries) => {
    console.log(entries.map(s => s.target.id), sectionList.map(s => s.id));
    console.log("Entries", entries.length)
    for(let entry of entries) {
      let entryName = 'Unknown'
      for (let section of sectionList) {
        if (section.id === entry.target.id) {
          entryName = section.name
          break
        }
      }
      console.log("Entry " + entryName + ":", entry.intersectionRatio)
    }
  
  }
  
  useEffect(() => {

    // Setup observer
    const observer = new IntersectionObserver((entries) => handleObserve(entries), {
      root: null, // default (null) to viewport
      threshold: new Array(101).fill(0).map((v, i) => i * 0.01)
    })
    // added elements to observe
    sectionList.forEach(section => {
      observer.observe(section.ref.current)
    })
    
    return () => {
      observer.disconnect()
      console.log("observer disconnected")
    }
  }, [sectionList])

  return (
    <>
    {sectionList && sectionList.length > 0 &&
      <nav className={'team-page-side-bar'}>
        <ul>
          {sectionList.map(sectionToLink)}
        </ul>
      </nav>}
    </> 
  )
}


const sectionToLink = (section) => {
  return (
    <li key={section.name} onClick={() => scrollToRef(section.ref)}>
      {section.name}
    </li>
  )
}

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)


