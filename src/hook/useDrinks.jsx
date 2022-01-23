import { useState, useContext, createContext } from 'react'


const contextDrinks = createContext()

export function DrinksProvider({ children }) {
  const [newDrink, setNewDrink] = useState('')
  const [amount, setAmount] = useState()
  const [nameDrink, setNameDrink] = useState([])
  const [drinks, setDrinks] = useState([])

  return (
    <contextDrinks.Provider
      value={{
        amount,
        setAmount,
        nameDrink,
        setNameDrink,
        newDrink,
        setNewDrink,
        drinks, setDrinks
      }}
    >
      {children}
    </contextDrinks.Provider>
  )
}

export function useDrinks() {
  const context = useContext(contextDrinks)

  const {  newDrink, setNewDrink, nameDrink, setNameDrink,drinks, setDrinks } =
    context

  return { newDrink, setNewDrink, nameDrink, setNameDrink , drinks, setDrinks }
}
