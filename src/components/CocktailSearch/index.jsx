import React, { useEffect } from 'react'
import { useDrinks } from '../../hook/useDrinks'
import axios from 'axios'
import { apiDrinkName } from '../../services/api'
import  Cards  from '../Cards'


export function CocktailSearch() {
  const { nameDrink, setNameDrink, newDrink } = useDrinks()

  const drinkSaveInLocalStorage = window.localStorage.getItem('newDrink')

  useEffect(() => {
    axios.get(apiDrinkName).then(res => setNameDrink(res.data.drinks))

    window.document.title = `Drinks ${drinkSaveInLocalStorage.toUpperCase()} | Challenge Ubistart`

    return () => {
      window.document.title = 'Home | Challenge Ubistart'
    }
  }, [newDrink])

  return (
    <>
      {nameDrink !== null && nameDrink !== undefined ? (
        nameDrink?.map(item => <Cards key={item.idDrink} item={item} />)
      ) : (
        <img
          src="https://media1.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif?cid=ecf05e471qpjmr7hgegao0kfq5h5mkvqrc50ygdjt82ymyyr&rid=giphy.gif&ct=g"
          alt=""
        />
      )}
    </>
  )
}
