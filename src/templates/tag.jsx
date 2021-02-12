import React from 'react';
import { graphql} from 'gatsby';

import MainLayout from '../layouts/MainLayout';
import BlogCard from '../components/BlogCard';
import SEO from '../components/SEO';

import styles from './blog.module.css';

export default function TagTemplate({ pageContext, data }) {
  return <MainLayout>
    <SEO title={pageContext.tag} />
    <div className={styles.blog__header}>
      <h2 className={styles.blog__title}>{pageContext.tag}</h2>
    </div>
    {data.allMdx.edges.map(({node}) => <BlogCard key={node.id} node={node} />)}
  </MainLayout>
}

export const pageQuery = graphql`
  query tags($tag: String) {
    allMdx(sort: {fields: frontmatter___date, order: DESC},
      filter: {
        frontmatter: {
          template: {
            eq: "blog"
          },
          published: {
            eq: true
          },
          tags: {
            in: [$tag]
          }
        }
      }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "D MMMM yyyy")
            excerpt
            slug
            tags
            cta
          }
        }
      }
    }
  }
`;