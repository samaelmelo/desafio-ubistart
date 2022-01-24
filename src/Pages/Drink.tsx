import { Header } from '../components/Header'

import { CocktailSearch } from '../components/CocktailSearch'
import Footer from '../components/Footer'

import styles from '../components/Dashboard/styles.module.scss'

export function Drink() {
  return (
    <>
      <Header />

      <main className={styles.containerMain}>
        <CocktailSearch />
      </main>
      <Footer />
    </>
  )
}
