import React from 'react'

import styles from './styles.module.scss'

function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div className={styles.wrapperFooter}>
        <p>
          Develod by 
          <a href="https://samaeldev.herokuapp.com" target="_blank" rel="noreferrer">
          &nbsp;Samael Melo
          </a>
          
        </p>
      </div>
    </footer>
  )
}

export default Footer
