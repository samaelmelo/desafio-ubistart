import { Header } from '../components/Header'

import { CocktailSearch } from '../components/CocktailSearch'

import styles from '../components/Dashboard/styles.module.scss'

export function Drink() {
  return (
    <>
      <Header />

      <main className={styles.containerMain}>
        <CocktailSearch />
      </main>
    </>
  )
}
