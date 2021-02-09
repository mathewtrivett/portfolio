import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { titleCase } from '../../utils/helpers';
import styles from './footer.module.css';

export default function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              github
              twitter
              medium
              linkedin
            }
          }
        }
      }
    `)

  const social = site.siteMetadata?.social;

  return (
    <footer className={styles.footer}>
      <nav aria-label="footer" className={styles.footer__nav}>
        {Object.keys(social).map((key, index) => {
          return <a key={key} href={social[key]} className={styles.footer__item}>{titleCase(key)}</a>
        })}
      </nav>
    </footer>
  )
}