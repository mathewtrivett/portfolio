import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx"

import MainLayout from '../layouts/MainLayout';
import SEO from '../components/SEO';

export default function BlogTemplate({data}) {
  const title = data.mdx.frontmatter.title;
  return (
    <MainLayout>
      <SEO title={data.mdx.frontmatter.title} />
      {title && <h2>{title}</h2>}
      <span>{data.mdx.frontmatter.date}</span>
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