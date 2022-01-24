import { CardsDrinks } from '../CardsDrinks'


import styles from './styles.module.scss'

export function Dashboard() {
  return (
    <>
      <main className={styles.containerMain}>
        <CardsDrinks />
      </main>
    </>
  )
}
