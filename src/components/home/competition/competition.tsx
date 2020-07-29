import React from 'react'
import { Link } from 'react-router-dom'
import SideBySideComponent from '../../common-components/SideBySideComponent/SideBySideComponent'
import styles from './competition.module.css'

const title: string = "Do you know iGEM?"
const bodyText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus rhoncus, ut facilisi condimentum nisi morbi in id. Orci, convallis dui urna, cursus."
const imageSrc: string = "/logo512.png"
const imageAlt: string = "React Logo"
const linkLocation: string = "/about"

export default function Competition() {
  let image = <div className={styles.imageContainer}><img className={"rounded img-fluid"} src={imageSrc} alt={imageAlt} /></div>
  let text = (
    <>
      <article className={styles.articleStyle}>
        <div className={styles.textTopBarStyle}/>
        <h3>{title}</h3>
        <p tabIndex={4}>{bodyText}</p>
        <Link className={styles.linkStyle} to={linkLocation}>Learn More</Link>
      </article>
    </>
  )

  return (
    <article className={styles.layout}>
      <SideBySideComponent
        rightChild={image}
        leftChild={text}
        leftWidth={"50%"}
      />
    </article>
  )
}