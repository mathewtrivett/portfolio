import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from '../components/SEO';

export default function BlogTemplate({data}) {
  return (
    <>
    <SEO title={data.mdx.frontmatter.title} />
    <MDXRenderer>
      {data.mdx.body}
    </MDXRenderer>
    </>
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