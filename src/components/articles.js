import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./articles.sass"

const Articles = ({data, style}) => {
    const arrayArticles = data.nodes.map( objet => {
        const image = getImage(objet.frontmatter.img)

        return(
            <div
                className={`cardArticle borderCian `+ style}
                key={objet.id}
            >
                <h1>
                    {objet.frontmatter.title}
                </h1>
                <GatsbyImage 
                    image={image}
                    alt={`Bannière de l'article ${objet.frontmatter.titre}` }
                />
                <div
                    dangerouslySetInnerHTML={{ __html: objet.html }}
                />
            </div>
        )
    })
    return (
        <>
            {arrayArticles}
        </>
    )
}

export default Articles
