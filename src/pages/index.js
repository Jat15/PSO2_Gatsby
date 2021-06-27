import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.sass"


const IndexPage = ({data}) => {
    

    const listArticle =data.allMarkdownRemark.nodes.map( objet => {
        const image = getImage(objet.frontmatter.img)

        return <div className="cardArticle">
            <h1>{objet.frontmatter.titre}</h1>
            <GatsbyImage image={image} alt={`Banniére de l'articles ${objet.frontmatter.titre}` } />
            <div>

                <div
                    dangerouslySetInnerHTML={{ __html: objet.html }}
                />
            </div>
        </div>
    })

    return (
        <Layout>
            <Seo title="Home" />
            <div className="containerArticles">
                {listArticle}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query{
        allMarkdownRemark(
            filter: {frontmatter: {type: {eq: "Article"}}}
            sort: { fields: [frontmatter___date], order: DESC} 
        ) {
            nodes {
                html
                frontmatter {
                    titre
                    type
                    img{
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                width: 384
                                height: 216
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage
