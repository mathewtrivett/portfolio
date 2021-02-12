import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Bio() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `)

  return (<div>
    <span>{site.siteMetadata.title}</span>
    <p>{site.siteMetadata.description}</p>
  </div>)
}