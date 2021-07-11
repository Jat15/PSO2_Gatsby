/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge';

import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"
import ShorcutBar from "./shortcutbar"

import "./layout.sass"





const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query{
      site {
        siteMetadata {
          title
        }
      }
      background : file(relativePath: { eq: "background.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1080
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  const style = {
    // Defaults are overwrite-able by setting one or each of the following:
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed'
  }

  const pluginImage = getImage(data.background)

  return (
    <BgImage
      image={pluginImage}
      className="imageBackground"
      style={style}
    >
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div
        className="container" 
      >
        <input
          type="checkbox"
          id="menuCheckbox"
          className="displayNone"
        />
        <aside>
          <Menu />
        </aside>
        <ShorcutBar />
        <main 
          className="windowLayout"
        >
            <section>
              {children}
            </section>
            <Footer/>
        </main>
      </div>
    </BgImage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
