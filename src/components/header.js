import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./header.sass"

const Header = ({ siteTitle }) => (
  <header>
      <Link to="/">
        <StaticImage
              src="../images/logo/chronique.png"
              placeholder="blurred" 
              formats={["AUTO", "WEBP"]}
              alt="Logo de phantasy star chronique"
        />
      </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
