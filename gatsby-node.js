/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it


const path = require("path")

exports.onCreateNode = ({ node, getNode, actions, createNodeId }) => {

    if(node.internal.type !== `MarkdownRemark`) {
      return
    }

    if (node.frontmatter.type === `PageGame`) {
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


    } else if (node.frontmatter.type === "Tab") {
      actions.createNode({
        id: createNodeId(node.frontmatter.title),
        markdownId: node.id,
        internal: {
          type: "Tab",
          contentDigest: node.internal.contentDigest,
        },
      })
    } else {
      return
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

  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allSubTab {
          nodes {
            slug
          }
        }
      }
    `)

    result.data.allSubTab.nodes.forEach(( node ) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/normal.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  }
