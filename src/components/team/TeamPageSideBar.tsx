import React,  { useEffect, useState } from 'react'
import './TeamPageSideBar.css'
import { section } from './teamPage'

type propsType = {
  sectionList: section[]
}

/*
 * section list in the form [{ name: 'name', id: 'id-tag', ref: React.Ref }]
 * all sections must have an id tag same with the id field
 */
export default function TeamPageSideBar({ sectionList }: propsType) {
  const [currSection, setCurrSection] = useState('')
  const [sectionRatios, setSectionRatios] = useState({})
  
  useEffect(() => {    
    setSectionRatios({}) // Clears previous data from other pages
    
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
          {buildSections(sectionList, currSection)}
        </ul>
      </nav>}
    </> 
  )
}

const buildSections = (sections, currSection) => {
  let maxLength = sections[0].name
  let list = sections.map(section => {
    if (section.name.length > maxLength.length)
      maxLength = section.name
    return sectionToLink(section, currSection)
  })
  list.push(
    <li key={`placeholder-${maxLength}`} style={{ fontSize: "1.5em", visibility: "hidden", height: "0px"}}>{maxLength}</li>
  )
  return list
}

const sectionToLink = (section, currentId) => {
  const className = section.id === currentId ? "team-page-side-bar-current" : ""
  return (
    <li
      key={section.id}
      onClick={() => scrollToRef(section.ref)}
      className={className}
    >
      {section.name}
    </li>
  )
}

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)


