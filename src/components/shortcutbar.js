import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "./shortcutbar.sass"

const ShorcutBar = () => (
  <div className="shortcutBar">
    <label htmlFor="menuCheckbox" className="logoMenu ">
      <StaticImage
        src={"../images/icon_menu.png"}
        placeholder="blurred"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Logo menu"
        width={32}
        layout="fixed"
      />
    </label>
    <a href="https://discord.com/invite/48H8Fq8" className= "logoDiscord" target="_blank" rel="noreferrer">
      <StaticImage
          src="../images/discord.png"
          placeholder="blurred" 
          formats={["AUTO", "WEBP"]}
          alt="Logo discord"
          width={32}
          layout="fixed"
      />
    </a>
  </div>
)


export default ShorcutBar