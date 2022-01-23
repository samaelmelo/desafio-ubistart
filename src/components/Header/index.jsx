import { useParams, Link } from 'react-router-dom'
import { useDrinks } from '../../hook/useDrinks'
import { BsSearch } from 'react-icons/bs'
import { ImSpinner11 } from 'react-icons/im'
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import styles from './styles.module.scss'

export function Header(props) {
  const { newDrink, setNewDrink } = useDrinks()

  const params = useParams().drink

  const notify = () => {
    toast.error('Enter a correct value!!!', {
      position: toast.POSITION.TOP_CENTER
    })
  }

  function showNewDrink() {
    if (newDrink.length === 0) {
      notify()
      return
    }
    window.localStorage.setItem('newDrink', newDrink)
    window.location.href = `/drink/${newDrink}`
  }

  function button() {
    if (params === undefined) {
      return (
        <Link to="/" onClick={() => window.location.reload()}>
          <ImSpinner11 color="#00d600" />
          Random Drink
        </Link>
      )
    } else {
      return <a href="/">back to home</a>
    }
  }


  return (
    <header className={styles.containerHeader}>
      <div className={styles.content}>
        {button()}

        <nav>
          <input
            type="text"
            placeholder="Seach for a Cocktail..."
            onChange={ev => setNewDrink(ev.target.value)}
            value={newDrink}
          />

          <button onClick={showNewDrink}>
            <BsSearch /> Search
          </button>
        </nav>
      </div>

      <ToastContainer />
    </header>
  )
}
