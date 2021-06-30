import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"


import "./menu.sass"

const Menu = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: {fields: [frontmatter___dateReleaseGame, frontmatter___orderSubMenu], order: [DESC, ASC]}
        filter: {fields: {slug: {ne: null}}}
      ) {
        nodes {
          id
          frontmatter {
            game
            title
          }
          fields {
            slug
          }
        }
      }
    }

  `)

  let oldMenu

  const menu = data.allMarkdownRemark.nodes.map( section => {

    const newMenu = section.frontmatter.game

    if (newMenu !== oldMenu){
      const submenu =data.allMarkdownRemark.nodes.map( 
        categorie => { 
          
          if (section.frontmatter.game === categorie.frontmatter.game) {
            return(
            <li>
              <Link to={"/"+categorie.fields.slug}>
                {categorie.frontmatter.title}
              </Link>
            </li>
            )
          }
      })
    
      oldMenu = newMenu
      
      return <li className="has-sub">
        <label htmlFor={section.id}>{section.frontmatter.game}</label><input id={section.id} name="menu" type="radio" />
        <ul className="sub">
          {submenu}
        </ul>
      </li>
    }
  })

  return( 
    <ul className="accordion">
      {menu}
    </ul>
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
