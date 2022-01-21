import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { api } from '../../services/api'
import { ModalBootstrap } from '../ModalBootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegTrashAlt } from 'react-icons/fa'
import { EditProducts } from '../EditProducts'
import {useAmount} from "../../hook/useAmount"
import axios from 'axios'

import styles from "./styles.module.scss"

export function CardBootstrap() {

  const {setAmount, newDrink} = useAmount()

  const [values, setValues] = useState()


  const[drinks, setDrinks] = useState([])
  
  const letter = ['a','b','c','d','e','f','g','h','i','j','l','m','n','o','p','q','r','s','t','u','v','x','z']

  const randomLetter = letter[Math.ceil(Math.random() * letter.length - 1)]

  useEffect(() => {
    // getProductsInDataBase() 

    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${randomLetter}`).then(res => setDrinks(res.data.drinks))
    
  }, [])

  function searchNewDrink(){
    
  }


  
  // const getProductsInDataBase = () => {
  //   api.get('/products')
  //   .then(res => setValues(res.data))
  //   .catch(error => console.log(error))
  // }

  console.log(newDrink)
 

//   const deleteProducts = (id) => {


//     const newValeus = values.filter( item => item.id !== id)
    
//     setValues(newValeus)

//     api.delete(`/products/${id}`)
//     .then(res => alert('Product deleted.'))
//     .catch(error => console.lof(error))
//   }


const showMe = (item) => {
  setAmount(prevValue => {
    return {
      ...prevValue,
      ...item
    }
  })


}



  return (
    <>
      {drinks?.map((item) => (
        <Card key={item.idDrink} style={{ width: '18rem', heigth: '20rem' }}>
          <Card.Img variant="bottom" src={item.strDrinkThumb} />

          <Card.Body>
              <h3>{item.strDrink}</h3>
            {/* <Card.Title>{item.strCategory}</Card.Title> */}
            <Card.Title>{item.strCategory}</Card.Title>
            <Card.Text className={styles.description}>{item.strInstructions}</Card.Text>
            <span className={styles.currency}>
              {/* {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(item.amount)} */}
            </span>


            <footer className={styles.containerFooter}>
             <div className={styles.containerSvg}>
                  <EditProducts name={item.name} description={item.description} src={item.src} amount={item.amount} index={item.id}/>

                   <FaRegTrashAlt  />

                  <AiOutlineShoppingCart onClick = {() => showMe(item)}/>
             </div>


              <ModalBootstrap drink={item} />
            </footer>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
