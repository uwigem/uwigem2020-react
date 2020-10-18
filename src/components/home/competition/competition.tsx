import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from '../../common-components/Image'
import styles from './competition.module.css'

const title: string = "Do you know iGEM?"
const bodyText: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus rhoncus, ut facilisi condimentum nisi morbi in id. Orci, convallis dui urna, cursus."
const imageSrc: string = `/PlaceholderImage/arknights3.png`
const imageAlt: string = "React Logo"
const linkLocation: string = "/team"

export default function Competition() {
  return (
    <Container className={styles.layout} fluid>
      <Row className={"justify-content-md-center align-items-center"}>
        <Col md={5}>
          <article className={styles.articleStyle}>
            <div className={styles.textTopBarStyle}/>
            <h3>{title}</h3>
            <p tabIndex={4}>{bodyText}</p>
            <Link className={styles.linkStyle} to={linkLocation}>Learn More</Link>
          </article>
        </Col>
        <Col md={1}/>
        <Col md={5} className={"justify-content-md-center align-items-center"}>
          <Image src={imageSrc} alt={imageAlt} fluid local/>
        </Col>
      </Row>
    </Container>
  )
}