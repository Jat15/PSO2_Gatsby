import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./header.sass"

const Header = ({ siteTitle }) => (
  <header>
      <Link to="/">
        <StaticImage
              src="../images/logo.png"
              placeholder="blurred" 
              formats={["AUTO", "WEBP"]}
              alt="Logo de phantasy star chronique"
        />
      </Link>
      <a href="https://discord.com/invite/48H8Fq8" className= "logoDiscord" target="_blank" rel="noreferrer">
        <StaticImage
              src="../images/discord.png"
              placeholder="blurred" 
              formats={["AUTO", "WEBP"]}
              alt="Logo discord"
              width= "64"
        />
      </a>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
