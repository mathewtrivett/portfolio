/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { kebabCase } = require('./src/utils/helpers');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve(`./src/templates/blog.jsx`);
  const tagTemplate = path.resolve(`./src/templates/tag.jsx`);

  const result = await graphql(
    `
    {
      posts: allMdx(limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
      tags: allMdx(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.posts.nodes;
  const tags = result.data.tags.group;

  if(posts.length > 0) {
    posts.forEach((post, index) => {

      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId
        }
      })
    })
  }

  if(tags.length > 0) {
    tags.forEach((tag, index)=> {
      createPage({
        path: `/tags/${kebabCase(tag.fieldValue)}`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue
        }
      })
    })
  }
}