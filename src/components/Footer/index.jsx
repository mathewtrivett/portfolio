import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { titleCase } from '../../helpers/words';
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
      <nav>
        {Object.keys(social).map((key, index) => {
          return <a key={key} href={social[key]}>{titleCase(key)}</a>
        })}
      </nav>
    </footer>
  )
}