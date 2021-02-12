import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx"

import MainLayout from '../layouts/MainLayout';
import SEO from '../components/SEO';
import TagLinks from '../components/TagLinks';

import styles from './blog.module.css';

export default function BlogTemplate({ data }) {
  const title = data.mdx.frontmatter.title;
  return (
    <MainLayout>
      <SEO title={title} description={data.mdx.frontmatter.excerpt} />
      {title && <div className={styles.blog__header}>
        <h2 className={styles.blog__title}>{title}</h2>
        <span>{data.mdx.frontmatter.date}</span>
        {data.mdx.frontmatter.tags && <TagLinks tags={data.mdx.frontmatter.tags}/>}
      </div>}
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </MainLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostbySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }

    mdx(id: { eq: $id } ) {
      id
      excerpt
      body
      timeToRead
      frontmatter {
        title
        slug
        date(formatString: "D MMMM yyyy")
        external
        excerpt
        tags
      }
    }

    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }

      frontmatter {
        title
      }
    }

    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`