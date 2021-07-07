/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")



exports.onCreateNode = ({ node, getNode, actions, createNodeId }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark` && node.frontmatter.type === `PageGame`) {

      const slugify = str =>
        str
            .toLowerCase()
            .trim()
            .replace(/[\s_-]+/g, '-')
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "")     

        const slug = slugify(node.frontmatter.route.join('/') + '/' +  node.frontmatter.title)

        actions.createNode({
          id: createNodeId(slug),
          slug: slug,
          markdownId: node.id,
          parent: createNodeId(node.frontmatter.route[0]),
          internal: {
            type: "SubTab",
            contentDigest: node.internal.contentDigest,
          },
        })


    }

    if (node.internal.type === "MarkdownRemark" && node.frontmatter.type === "Tab") {
      actions.createNode({
        id: createNodeId(node.frontmatter.title),
        markdownId: node.id,
        internal: {
          type: "Tab",
          contentDigest: node.internal.contentDigest,
        },
      })
    }

  }

  exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
      type Tab implements Node {
        id: ID!
        markdownId: ID!
        markdownPage: MarkdownRemark @link(by: "id" from: "markdownId")
        subTabs: [SubTab] @link(by: "parent.id" from: "id")
      }
      type SubTab implements Node {
        id: ID! 
        slug: String!
        markdownId: ID!
        markdownPage: MarkdownRemark @link(by: "id" from: "markdownId")
        subTabs: [SubTab] @link(by: "parent.id" from: "id")
      }
    `
    createTypes(typeDefs)
  }