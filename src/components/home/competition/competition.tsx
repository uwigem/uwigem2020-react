import React from 'react'
import { Link } from 'react-router-dom'
import SideBySideComponent from '../../common-components/SideBySideComponent/SideBySideComponent'

type CompetitionProps = {
  imageSrc: string,
  imageAlt: string,
  title: string,
  linkLocation: string,
  bodyText: string
}

const layoutStyle = {
  margin: "5vh 5vw",
  padding: "5vh 5vw"
}

let imageContainerStyle = {
  textAlign: "center",
  width: "50%"
}

const textTopBarStyle = {
  height: "10%",
  backgroundColor: "#4B2E83"
}

const linkStyle = {
  padding: "1em",
  alignSelf: "flex-end",
  color: "#4B2E83",
  border: "solid"
}

const articleStyle ={
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "flex-start",
  padding: "2em",
  height: "90%",
  justifyContent: "flex-between"
}

export default function Competition(props: CompetitionProps) {
  let image = <img className={"rounded img-fluid"} src={props.imageSrc} alt={props.imageAlt} />
  let text = (
    <>
      <div style={textTopBarStyle}/>
      <article style={articleStyle}>
        <h3>{props.title}</h3>
        <p tabIndex={4}>{props.bodyText}</p>
        <Link style={linkStyle} to={props.linkLocation}>Learn More</Link>
      </article>
    </>
  )

  return (
    <article>
      <SideBySideComponent
        leftChild={image}
        rightChild={text}
        style={layoutStyle}
        leftStyle={imageContainerStyle}
      />
    </article>
  )
}