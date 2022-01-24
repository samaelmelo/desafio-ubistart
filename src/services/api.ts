const letter = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'x',
  'z'
]

const randomLetter = letter[Math.ceil(Math.random() * letter.length - 1)]

const drinkSaveInLocalStorage = window.localStorage.getItem('newDrink')

export const api =  `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${randomLetter}`


export const apiDrinkName = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkSaveInLocalStorage}`