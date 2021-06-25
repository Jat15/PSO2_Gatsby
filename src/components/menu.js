import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./menu.sass"

const Menu = ({ siteTitle }) => (
<ul class="accordion">
  <li class="has-sub">
    <label for="menu1">Menu principal</label><input id="menu1" name="menu" type="radio" />
    <ul class="sub">
      <li>
        <a>Home</a>
      </li>
      <li>
        <Link to="https://discord.gg/48H8Fq8">Discord</Link>
      </li>
      <li>
        <a>Forum</a>
      </li>
    </ul>
  </li>
  <li class="has-sub">
    <label for="menu2">Phantasy Star</label><input id="menu2" name="menu" type="radio" />
    <ul class="sub">
      <li>
        <a>Phantasy Star I-IV</a>
      </li>
    </ul>
  </li>
  <li class="has-sub">
    <label for="menu3">Phantasy Star Online</label><input id="menu3" name="menu" type="radio" />
    <ul class="sub">
      <li>
        <a>Présentation</a>
      </li>
    </ul>
  </li>
</ul>
)

/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/
export default Menu
