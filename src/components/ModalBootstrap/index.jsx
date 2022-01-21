import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export function ModalBootstrap({ drink }) {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
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
              <p>{drink.strInstructions}</p>
            </li>
            <li>
              <p>{drink.strInstructionsIT}</p>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  )
}
