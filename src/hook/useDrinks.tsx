import { useState, useContext, createContext, ReactNode } from 'react'


interface DrinksProviderProps{
  children: ReactNode;
}

interface DrinksProps{
  idDrink: string,
  strDrink: string,
  strCategory:string,
  strInstructions: string,
  strInstructionsIT?: string,
  strInstructionsDE?:string,
  strDrinkThumb?: string,

}


interface NameDrinkProps {
    idDrink: string,
    strDrink: string,
    strInstructions: string,
    strInstructionsIT: string | undefined,
    strInstructionsDE: string | undefined,
    strDrinkThumb: string,
    strCategory:string, 
}


type UserDrinkType = {
  nameDrink: DrinksProps[],
  setNameDrink: (value: []) => void,
  newDrink: string,
  setNewDrink: (value: string) => void,
  drinks: DrinksProps[],
  setDrinks: (value: []) => void
}

const initialValue = {
  newDrink: '',
  setNewDrink: () => { },
  nameDrink: [],
  setNameDrink: () => { },
  drinks: [],
  setDrinks: () => { }
}


const contextDrinks = createContext<UserDrinkType>(initialValue)


export function DrinksProvider({ children }: DrinksProviderProps) {
  const [nameDrink, setNameDrink] = useState<NameDrinkProps[]>([])
  const [newDrink, setNewDrink] = useState('')
  const [drinks, setDrinks] = useState<DrinksProps[]>([])  

  return (
    <contextDrinks.Provider
      value={{
        nameDrink,
        setNameDrink,
        newDrink,
        setNewDrink,
        drinks,
        setDrinks

      }}
    >
      {children}
    </contextDrinks.Provider>
  )
}

export function useDrinks() {
  const context = useContext(contextDrinks)

  const { newDrink, setNewDrink, nameDrink, setNameDrink, drinks, setDrinks } =
    context

  return { newDrink, setNewDrink, nameDrink, setNameDrink, drinks, setDrinks }

  
}
