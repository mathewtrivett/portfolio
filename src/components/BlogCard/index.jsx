import React from 'react';
import { Link } from 'gatsby';
import styles from './blogCard.module.css';

const ExternalLink = ({node}) => {
  return <a href={node.frontmatter.slug}><h3 className={styles.card__title}>{node.frontmatter.title}</h3></a>;
}

const InternalLink = ({node}) => {
  return <Link to={node.frontmatter.slug}><h3 className={styles.card__title}>{node.frontmatter.title}</h3></Link>;
}

const CardLink = ({node}) => {
  return node.frontmatter.external ? <ExternalLink node={node} /> : <InternalLink node={node} />
}

const BlogCard = ({ node }) => {
  return (
    <article className={styles.card}>
      <CardLink node={node}/>
      <span>{node.frontmatter.date}</span>
    </article>
  )
}

export default BlogCard;