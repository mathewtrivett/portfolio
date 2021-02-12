import React from 'react';
import { Link } from 'gatsby';

import styles from './blogCard.module.css';

const ExternalLink = ({node, children, className}) => {
  return <a href={node.frontmatter.slug} className={className}>{children}</a>;
}

const InternalLink = ({node, children, className}) => {
  return <Link to={node.frontmatter.slug} className={className}>{children}</Link>;
}

const CardLink = ({node, children, className}) => {
  return node.frontmatter.external ? <ExternalLink node={node} className={className}>{children}</ExternalLink> : <InternalLink node={node} className={className}>{children}</InternalLink>
}

const BlogCard = ({ node }) => {
  const cta = node.frontmatter.cta ? node.frontmatter.cta : 'Continue reading';

  return (
    <article className={styles.card}>
      <div>
      <span className={styles.card__date}><time>{node.frontmatter.date}</time></span>
      </div>
      <div className={styles.card__body}>
      <h3 className={styles.card__title}>
        <CardLink node={node} className={styles.card__link}>
          {node.frontmatter.title}
        </CardLink>
      </h3>
        <p className={styles.card__excerpt}>{node.frontmatter.excerpt}</p>
        <CardLink node={node} className={styles.card__cta}>{cta}</CardLink>
      </div>
    </article>
  )
}

export default BlogCard;