import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import {BsCheckSquare} from "react-icons/bs"

// import styles from "./styles.module.scss"

export function ModalBootstrap({ drink }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} className='backgroundButton'>
        Info
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {drink.strDrink}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <p> {drink.strInstructions && <BsCheckSquare color="#00d600"/> } {drink.strInstructions} </p>
            </li>
            <li>
              <p> {drink.strInstructionsIT && <BsCheckSquare color="#00d600"/>} {drink?.strInstructionsIT }</p>
            </li>
            <li>
              <p> {drink.strInstructionsDE && <BsCheckSquare color="#00d600"/>}  {drink?.strInstructionsDE}</p>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  )
}
