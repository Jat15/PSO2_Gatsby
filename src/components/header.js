import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./header.sass"

const Header = ({ siteTitle }) => (
  <header>

    <div>
      <Link to="/">
        <StaticImage
              src="../images/logo.png"
              placeholder="blurred"
              formats={["AUTO", "WEBP"]}
              alt="A Gatsby astronaut"
        />
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
