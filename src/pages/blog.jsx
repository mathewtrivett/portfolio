import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from '../layouts/MainLayout';

import BlogCard from '../components/BlogCard';

export default function BlogIndex({ data } ) {
  return (
    <MainLayout>
      <h2>Blog</h2>
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
      }
      slug
      excerpt
      timeToRead
    }
  }
}

`

