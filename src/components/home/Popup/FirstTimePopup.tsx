import Cookies from 'js-cookie'
import React from 'react'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function FirstTimePopup() {
    let seen = Cookies.getJSON('visited')?.visited
    let [show, setShow] = useState(!seen)
    const handleClick = () => {
        Cookies.set('visited', { visited: true }, { expires: 3 })
        setShow(false)
    }
    return (
        <Modal show={show} size={"lg"} centered>
            {console.log(seen)}
            <Modal.Header>
                <Modal.Title>
                    {"We are recruiting!"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {"We are recruiting new members! Please visit the Get Involved page if you're interested or click the button below."}
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary"} onClick={handleClick}>Close</Button>
                <Link to={"/involvement"}>
                    <Button variant={"primary"} onClick={handleClick}>Get Involved</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    )
}