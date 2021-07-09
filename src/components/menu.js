import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import "./menu.sass"

const Menu = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
      query{
      allTab(
        sort: {fields: [markdownPage___frontmatter___dateReleaseGame], order: [DESC]}
      ) {
        nodes {
          id
          markdownPage {
            frontmatter {
              title
              logo{
                childImageSharp {
                  gatsbyImageData(
                      placeholder: BLURRED
                      width: 250
                      formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
          subTabs {
            ...test
          }
        }
      }
    }

    fragment test on SubTab {
      slug
      markdownPage {
        id
        frontmatter {
          title
          order
        }
      }
    }
  `)
  

  const menu = data.allTab.nodes.map( tab => {


    // Trie les submenu
    tab.subTabs.sort(function (a, b) {
      return a.markdownPage.frontmatter.order - b.markdownPage.frontmatter.order;
    });

    //création des submenu
    const submenu = tab.subTabs.map( subTab =>
      <li key={subTab.markdownPage.id}>
        <Link to={"/"+ subTab.slug}>
          {subTab.markdownPage.frontmatter.title}
        </Link>
      </li>
    )
    const logo = tab.markdownPage.frontmatter.logo ? getImage(tab.markdownPage.frontmatter.logo): false

    return <li className="has-sub" key={tab.id}>

        <label htmlFor={tab.id}>
          {
            logo?
              <GatsbyImage image={logo} alt={`Logo ${tab.markdownPage.frontmatter.title}` } />
              :<p className="labelText">{tab.markdownPage.frontmatter.title}</p>
      
          }
        </label>

      <input id={tab.id} name="menu" type="radio" />
      <ul className="sub">
        {submenu}
      </ul>
    </li>
  })

  return(
    <>
    <ul className="accordion">
      {menu}
    </ul>
    </>
  )
}

/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/
export default Menu
