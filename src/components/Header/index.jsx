import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './header.module.css';

export default function Header() {

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navigation} aria-label='main'>
          <Link to='/' className={styles.menu__brand}><h1>{site.siteMetadata.title}</h1></Link>
          <div className={styles.menu}>
          <Link to='/about' className={styles.menu__item}>About</Link>
          <Link to='/now' className={styles.menu__item}>Now</Link>
          <Link to='/blog' className={styles.menu__item}>Blog</Link>
          <Link to='/projects' className={styles.menu__item}>Projects</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}