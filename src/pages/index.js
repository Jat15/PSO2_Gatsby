import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.sass"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src= "https://upload.wikimedia.org/wikipedia/fr/c/cd/Phantasy_Star_Online_Logo.png"
      alt= "Logo de phantasy star online"
      className= "ArticlesBanner"
    />
  <p>Phantasy Star Online (ファンタシースターオンライン) est un jeu de rôle en ligne massivement multijoueur sorti sur Dreamcast en l'an 2000 au Japon et début 2001 en Europe et aux États-Unis. Il est souvent considéré comme le premier vrai jeu du genre sur console. Après de nombreux jeux sortis dans cette catégorie au cours des années suivantes, les joueurs le catégorisent plutôt comme un hack and slash.  </p>

  <p>Un deuxième épisode, Phantasy Star Online ver.2 sortira par la suite sur la même machine. La Dreamcast arrivant alors en fin de vie, le jeu sera porté sur de nombreuses autres consoles et verra naître d'autres suites.</p>

  </Layout>
)

export default IndexPage
