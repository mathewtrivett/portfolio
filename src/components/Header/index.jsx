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
          <h1 className={styles.menu__brand}><Link to='/' activeClassName="active">{site.siteMetadata.title}</Link></h1>
          <div className={styles.menu}>
            <Link to='/about' className={styles.menu__item} partiallyActive={true} activeClassName="active"> About</Link>
            <Link to='/now' className={styles.menu__item} partiallyActive={true} activeClassName="active">Now</Link>
            <Link to='/blog' className={styles.menu__item} partiallyActive={true} activeClassName="active">Blog</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}