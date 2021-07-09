import * as React from "react"
import PropTypes from "prop-types"
import "./footer.sass"

const Footer = ({ siteTitle }) => (
    <footer>
        <span>© {new Date().getFullYear()} - 2021</span>
        <span>Toutes les images, les logos, données, de la licence des Phantasy Star appartiennent ©SEGA</span>
        <span>Site construit avec <a href="https://www.gatsbyjs.com" target="_blank"rel="noreferrer">Gatsby</a></span>
        <span>Créé par <a href="https://github.com/Jat15" target="_blank" rel="noreferrer">Jat</a></span>
        <span>Hébergeur et créateur du contenue <a href="mailto:trucbidule@fournisseur.net">DevilRoy</a></span>
    </footer>
)

/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/
export default Footer