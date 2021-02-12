import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import MainLayout from '../layouts/MainLayout';
import BlogCard from '../components/BlogCard';
import styles from '../templates/blog.module.css';

export default function BlogIndex({ data } ) {
  return (
    <MainLayout>
      <SEO title='Blog' />
      <h2 className={styles.blog__title}>Blog</h2>
      {data.allMdx.nodes.map(node => {
        return <BlogCard key={node.id} node={node} />
      })}
  </MainLayout>)
};

export const pageQuery = graphql`
query BlogPosts {
  allMdx(sort: {
    fields: frontmatter___date, order: DESC
  }, 
  filter: {
    frontmatter: {
      template: { eq: "blog"}, 
      published: { eq: true }
    }
  }) {
    nodes {
      id
      frontmatter {
        title
        slug
        date(formatString: "D MMMM yyyy")
        external
        excerpt
        cta
        tags
      }
      slug
      excerpt
      timeToRead
    }
  }
}
`

