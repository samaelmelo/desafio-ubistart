import React, {memo} from 'react'
import { Card } from 'react-bootstrap'
import { ModalBootstrap } from '../ModalBootstrap'

import styles from '../CardsDrinks/styles.module.scss'

function Cards({ item }) {
  return (
    <Card style={{ width: '18rem', heigth: '20rem' }} className={styles.card}>
      <Card.Img variant="bottom" src={item.strDrinkThumb} />

      <Card.Body>
        <h3>{item.strDrink}</h3>
        <Card.Title>{item.strCategory}</Card.Title>
        <Card.Text className={styles.description}>
          {item.strInstructions}
        </Card.Text>

        <footer className={styles.containerFooter}>
          <ModalBootstrap drink={item} />
        </footer>
      </Card.Body>
    </Card>
  )
}

export default memo(Cards)
