import React, { useState} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { api } from '../../services/api'
import {AiOutlineEdit} from "react-icons/ai"

import styles from './styles.module.scss'

export function EditProducts(props) {
  const [show, setShow] = useState(false)

  const [amount, setAmount] = useState(props.amount)
  const [src, setSrc] = useState(props.src)
  const [description, setDescription] = useState(props.description)
  const [name, setName] = useState(props.name)


  const saveRegister = () => {
    if(!name || !amount || !src || !description){
      alert('Preencha os dados corretamente para adicionar um produto.')
      return
    }
    const newValue = {
      id: props.index,
      name,
      amount,
      src,
      description,  
      created_at: new Date('2021-02-12 09:00:00'),
    } 

    
    api.put(`/products/${newValue.id}`, newValue , {title: 'Axios PUT Request Example'})
    .then(response => console.log(response));
    
    window.Location.reload('http://localhost:3000')

    setShow(false)
    
  }

  const handleClose = () => {
   
    
    setShow(false)

  }

  const handleShow = () => setShow(true)


  return (
    <>
      <Button
        style={{background: 'transparent', border: 'none'}}
        className={styles.buttonAdd}
        variant="primary"
        onClick={handleShow}
      >
        <AiOutlineEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicione um Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form 
            action="http://localhost:3000/"
            method="GET"
            className={styles.formModalAddProducts}
          >
            <label htmlFor="name">Produto:</label>
            <input
              type="text"
              id="product"
              name="name"
              placeholder="Nome do produto"
              required
              value={name}
              onChange={ ev => setName(ev.target.value)} 
              />
            <label htmlFor="src">URL:</label>
            <input 
              type="url" 
              id="src" 
              name="src" 
              placeholder="Url da image" 
              required
              value={src}
              onChange={ ev => setSrc(ev.target.value)}
              />
            <label htmlFor="amount">Valor:</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="R$ 0,00"
              required
              value={amount}
              onChange={ ev => setAmount(ev.target.value)}
              />
            <textarea
              name="description"
              placeholder="Descreva o produto"
              required
              value={description}
              onChange={ ev => setDescription(ev.target.value)}
              >
            </textarea>

            <button
              type="submit" 
               onClick={saveRegister}
            >Editar</button>

          </form>
              
        </Modal.Body>
      </Modal>
    </>
  )
}
