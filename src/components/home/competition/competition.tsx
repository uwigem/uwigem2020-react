import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './competition.module.css'

const title: string = "Do you know iGEM?"
const bodyText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus rhoncus, ut facilisi condimentum nisi morbi in id. Orci, convallis dui urna, cursus."
const imageSrc: string = "/logo512.png"
const imageAlt: string = "React Logo"
const linkLocation: string = "/about"

export default function Competition() {
  return (
    <Grid className={styles.layout} fluid>
      <Row middle="lg">
        <Col lg>
          <article className={styles.articleStyle}>
            <div className={styles.textTopBarStyle}/>
            <h3>{title}</h3>
            <p tabIndex={4}>{bodyText}</p>
            <Link className={styles.linkStyle} to={linkLocation}>Learn More</Link>
          </article>
        </Col>
        <Col lg>
          <img className={"rounded img-fluid"} src={imageSrc} alt={imageAlt} />
        </Col>
      </Row>
    </Grid>
  )
}