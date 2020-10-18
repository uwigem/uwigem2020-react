import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import { Button} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectModal.css"

/**
 * @param award award of the project (the best one)
 * @param awardWinning detail information about the awards
 * @param description description of the project
 * @param details details of the description, shown in modal only
 * @param img image of the project
 * @param name project name
 * @param professor professor name
 * @param year the year of the project
 * @returns {React.Component}
 */
const ProjectModal = (props) => { 
  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);

    return <>
        <Modal 
          show={show} 
          onHide={handleClose}
          size='xl'
        >
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="project-block-content">
          <Fade duration={500}>
            <img 
                className="project-block-img" 
                src={props.img}
                alt={props.name}
            />
            <div className="project-block-main">
                <div className="project-block-title">
                    <h1>{props.name}</h1>
                    <h2>{props.year}</h2>
                </div>
                <h2 className="project-block-professor">PI: Professor {props.professor}</h2>
                <p className="project-block-description">{props.description}</p>
                <div className="project-block-details">
                    <h2>Award Winning</h2>
                    {props.awardWinning.map(award => <li>{award}</li>)}
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