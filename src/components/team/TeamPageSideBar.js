import React,  { useEffect, useState } from 'react'
import './TeamPageSideBar.css'

/*
 * section list in the form [{ name: 'name', id: 'id-tag', ref: React.Ref }]
 * all sections must have an id tag same with the id field
 */
export default function TeamPageSideBar({ sectionList }) {
  const [currSection, setCurrSection] = useState('')
  const [sectionRatios, setSectionRatios] = useState({})
  
  
  useEffect(() => {

    const handleObserve = (entries) => {
      const newEntries = {}
      for(let entry of entries) {
        newEntries[entry.target.id] = entry.intersectionRatio
      }
      setSectionRatios(oldRatios => ({
        ...oldRatios,
        ...newEntries
      }))
    }

    // Setup observer
    const observer = new IntersectionObserver(entries => handleObserve(entries), {
      root: null, // default (null) to viewport
      threshold: new Array(101).fill(0).map((v, i) => i * 0.01)
    })
    // added elements to observe
    sectionList.forEach(section => {
      observer.observe(section.ref.current)
    })
    
    return () => {
      observer.disconnect()
    }
  }, [sectionList])

  useEffect(() => {
    let maxSectionRatio = { id: 'nothing', ratio: 0}
    for (let id in sectionRatios) {
      if (sectionRatios[id] > maxSectionRatio.ratio) {
        maxSectionRatio.ratio = sectionRatios[id]
        maxSectionRatio.id = id
      }
    }
    setCurrSection(maxSectionRatio.id)
  }, [sectionRatios])

  return (
    <>
    {sectionList && sectionList.length > 0 &&
      <nav className={'team-page-side-bar'}>
        <ul>
          {sectionList.map(section => sectionToLink(section, currSection))}
        </ul>
      </nav>}
    </> 
  )
}

const sectionToLink = (section, currentId) => {
  return (
    <li key={section.name} onClick={() => scrollToRef(section.ref)}>
      {section.id === currentId ? <b>{section.name}</b> : section.name}
    </li>
  )
}

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)


