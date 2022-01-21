import axios from "axios"
import {useEffect,useState, useContext, createContext} from "react"

const contextAmount = createContext()





export function AmountProvider({children}){
  const [newsDrinks, setNewsDrinks] = useState('')
  const [newDrink, setNewDrink] = useState('margarita')
  const [amount, setAmount] = useState()

    // useEffect(()=>{
    //   axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${newDrink}`).then(res => setNewDrink(res.data))
    // },[newsDrinks])


  return(
    <contextAmount.Provider value={{amount, setAmount, newDrink, setNewDrink, newsDrinks, setNewsDrinks}}>
        {children}
    </contextAmount.Provider>
  )
}


export function useAmount(){
  const context = useContext(contextAmount)

  const { amount, setAmount, newDrink, setNewDrink,newsDrinks, setNewsDrinks } = context
  
  return { amount, setAmount, newDrink, setNewDrink,newsDrinks, setNewsDrinks }
}

