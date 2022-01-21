import React, { useState, useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap'
import { api } from '../../services/api'
import axios from "axios"

import { BsSearch } from 'react-icons/bs'


import styles from './styles.module.scss'

export function ModalAddProducts({newDrink, onChangeNewDrink}) {
  const [show, setShow] = useState(false)

  const [amount, setAmount] = useState(0)
  const [src, setSrc] = useState('')
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [products, setProducts] = useState()

 
  function searchNewDrink(){
    // axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${'margarita'}`).then(res => console.log(res.data))
  }

  


  
  const saveRegister = () => {
    if(!name || !amount || !src || !description){
      alert('Preencha os dados corretamente para adicionar um produto.')
      return
    }
    const newValue = {
      name,
      amount,
      src,
      description,  
      created_at: new Date('2021-02-12 09:00:00'),
    } 
    
    api.post("/products", newValue)
    

    setShow(false)
    setAmount('')
    setSrc('')
    setDescription('')
    setName('')    
    window.location.reload()
  }

  const handleClose = () => {
    setAmount('')
    setSrc('')
    setDescription('')
    setName('')     
    
    setShow(false)

  }

  const handleShow = () => {
    setShow(true)

    searchNewDrink()
  
    // console.log(newDrink)
  }

  
  return (
    <>
      <Button
        className={styles.buttonAdd}
        variant="primary"
        onClick={handleShow}
      >
        <BsSearch/>
        Search
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mararita</Modal.Title>
        </Modal.Header>
        <Modal.Body>






          {/* <form 
            action="/"
            method="POST"
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
            >Salvar Produtos</button>

          </form>
               */}
        </Modal.Body>
      </Modal>
    </>
  )
}
