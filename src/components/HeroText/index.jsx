import React from 'react';
import styles from './heroText.module.css';

const HeroText = ({children}) => {
  return (
    <section className={styles.heroText}>
      {children}
    </section>
  )
}

export default HeroText;