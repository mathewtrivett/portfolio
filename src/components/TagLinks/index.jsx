import React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from '../../utils/helpers';

import styles from './tagLinks.module.css';

export default function TagLinks({ tags }) {
  return (<div className={styles.tagLinks}>
    {tags.map((tag, index) => {
      return <Link key={index} to={`/tags/${kebabCase(tag)}`} className={styles.tagLinks__item}>{tag}</Link>
    })}
  </div>)
}