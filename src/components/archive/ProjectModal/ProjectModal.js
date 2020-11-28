import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import "bootstrap/dist/css/bootstrap.min.css";

/**
 *  @param project a project object that conetains the following props
 *  @param medal medal of the project (a number)
 *  @param awards detail information about the awards
 *  @param description description of the project
 *  @param details details of the description, shown in modal only
 *  @param img image of the project
 *  @param name project name
 *  @param professor professor name
 *  @param year the year of the project
 *  @param callback a callback function of the Archive component
 *  @returns {React.Component} project modal (pop-up window of details)
 */
const ProjectModal = (props) => { 
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.callback(null);
  }

    return <>
        <Modal 
          show={show} 
          onHide={handleClose}
          size='xl'
        >
        {/* <Modal.Header closeButton>
          <Modal.Title>{props.project.name}</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <section className="project-block-content">
          <Fade duration={500}>
            <img 
                className="project-block-img" 
                src={props.project.img}
                alt={props.project.name}
            />
            <div className="project-block-main">
                <div className="project-block-title">
                    <h1>{props.project.name}</h1>
                    <h2>{props.project.year}</h2>
                </div>
                <h2 className="project-block-professor"><a href={props.project.link}>Wiki Page</a></h2>
                <p className="project-block-description">{props.project.details}</p>
                <div className="project-block-details">
                  <h2>Award Winning</h2>
                  {props.project.awards.map(award => <li>{award}</li>)}
                </div> 
            </div>
            </Fade>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
}

export default ProjectModal;