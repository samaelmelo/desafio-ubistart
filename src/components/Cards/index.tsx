import React, {memo} from 'react'
import { Card } from 'react-bootstrap'
import { ModalBootstrap } from '../ModalBootstrap'
import styles from '../CardsDrinks/styles.module.scss'

interface CardsProps {
  drink: {
    idDrink: string,
    strDrink: string
    strCategory:string,
    strInstructions: string
    strInstructionsIT: string | undefined
    strInstructionsDE: string | undefined
    strDrinkThumb: string
  }
}

interface DrinksProps{
  drink:{
    idDrink: string,
    strDrink: string,
    strCategory:string,
    strInstructions: string,
    strInstructionsIT?: string,
    strInstructionsDE?:string,
    strDrinkThumb?: string
  }
}

function Cards({ drink }: CardsProps | DrinksProps)  {
  return (
    <Card className={styles.card}>
      <Card.Img variant="bottom" src={drink.strDrinkThumb} />

      <Card.Body>
        <h3>{drink.strDrink}</h3>
        <Card.Title>{drink.strCategory}</Card.Title>
        <Card.Text className={styles.description}>
          {drink.strInstructions}
        </Card.Text>

        <footer className={styles.containerFooter}>
          <ModalBootstrap drink={drink} />
        </footer>
      </Card.Body>
    </Card>
  )
}

export default memo(Cards)
