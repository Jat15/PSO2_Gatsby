/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")



exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark` && node.frontmatter.type === `PageGame`) {

    const slugify = str =>
    str
        .toLowerCase()
        .trim()
        .replace(/[\s_-]+/g, '-')
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")

      const slug = slugify(node.frontmatter.game + '/' +  node.frontmatter.title)
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }


  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allMarkdownRemark(filter: {fields: {slug: {ne: null}}}) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
      }
    `)


    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/normal.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  }