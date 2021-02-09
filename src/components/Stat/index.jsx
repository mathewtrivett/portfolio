import React from 'react';
import styles from './stat.module.css';


const Stat = ({pre, post, number}) => {
  return (
  <div className={styles.stat}>
    {pre && <span className={styles.stat__pre}>{pre}</span>}
    <span className={styles.stat__number}>{number}</span>
    {post && <span className={styles.stat__post}>{post}</span>}
  </div>)
};


export default Stat;