import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from '../../common-components/Image'
import styles from './competition.module.css'

const title: string = "Do you know iGEM?"
const bodyText: string = "iGEM, International Genetically Engineered Machine, is an international competition in synthetic biology among undergraduate students as well high schoolers, “overgraduates,” entrepreneurs, and community labs. Every fall, teams from around the world will meet to present their projects from the past year in the Giant Jamboree. iGEM and synthetic biology are very interdisciplinary: apart from wetlab (bench) research, iGEM teams incorporate drylab (computational), web development, bioethics, entrepreneurship, community outreach and more into their project design."
const imageSrc: string = `/2016-iGEM_From_Above.png`
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
        <Col md={5} className={"d-flex justify-content-center align-items-center"}>
          <Image src={imageSrc} alt={imageAlt} fluid local/>
        </Col>
      </Row>
    </Container>
  )
}