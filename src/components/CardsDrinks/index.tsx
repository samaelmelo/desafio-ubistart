import React, {useEffect} from 'react'
import { useDrinks } from '../../hook/useDrinks'
import { api } from '../../services/api'
import Cards from "../Cards"
import axios from 'axios'

export function CardsDrinks() {
  const { drinks, setDrinks } = useDrinks()

  useEffect(() => {
    axios.get(api)
      .then(res => setDrinks(res.data.drinks))
      .catch(err => console.log(`Erro: ${err}`))
      
    })
  
  return (
    <>
      {drinks?.map(drink => (
        
        <Cards key={drink.idDrink} drink={drink}/>

      ))}

    </>
  )
}
