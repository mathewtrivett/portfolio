import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <Link to='/'><h1>Home</h1></Link>
          <Link to='/now'>Now</Link>
        </nav>
      </header>
    </div>
  )
}