import { useState } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import { ModalAddProducts } from '../ModalAddProducts'
import { useAmount } from '../../hook/useAmount'

import { BsSearch } from 'react-icons/bs'
import { useEffect } from 'react'

export function Header(props) {

  const { newDrink, setNewDrink } = useAmount()
  const [newsDrinks, setNewsDrinks] = useState('')

  function showNewDrink() {
    // setNewsDrinks(newDrink)
    setNewDrink(newsDrinks)

  }

  return (
    <header className={styles.containerHeader}>
      <div className={styles.content}>
        <h1>logo</h1>

        <nav>
            <input
              type="text"
              placeholder="Seach for a Cocktail..."
              onChange={ev => setNewsDrinks(ev.target.value)}
              value={newsDrinks}
            />

            {/* <ModalAddProducts newDrink={newDrink} /> */}
            <button onClick={showNewDrink}>
              <BsSearch /> Search
            </button>
        </nav>
      </div>
    </header>
  )
}
