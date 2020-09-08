import React,  { useEffect, useState } from 'react'
import './TeamPageSideBar.css'

/*
 * section list in the form [{ name: 'name', ref: React.Ref }]
 */
export default function TeamPageSideBar({ sectionList }) {
  
  const observer = new IntersectionObserver((entries) => handleObserve(entries, sectionList), {
    root: null, // default (null) to viewport
    threshold: new Array(101).fill(0).map((v, i) => i * 0.01) // [0.0,0.1,0.2,0.3, ..., 1.0]
  })
  useEffect(() => {
    sectionList.forEach(section => {
      observer.observe(section.ref.current)
    })
    return () => {
      observer.disconnect()
      console.log("observer disconnected")
    }
  }, [sectionList, observer])

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


const handleObserve = (entries, sectionList) => {
  console.log("Entries", entries.length)
  for(let entry of entries) {
    const entryName = sectionList.reduce((name, section) => {
      if (name === "Unknown" && section.ref.current === entry.target) {
        name = section.name
      }
      return name
    }, "Unknown")
    console.log("Entry " + entryName + ":", entry.intersectionRatio)
  }

}