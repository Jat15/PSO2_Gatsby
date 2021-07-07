import * as React from "react"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.sass"


const IndexPage = ({data}) => {
    const listArticle = data.articles.nodes.map( objet => {
        const image = getImage(objet.frontmatter.img)

        return <div className="cardArticle borderCian" key={objet.id} >
            <h1>{objet.frontmatter.title}</h1>
            <GatsbyImage image={image} className="borderCian" alt={`Bannière de l'article ${objet.frontmatter.titre}` } />
            <div>
                <div
                    dangerouslySetInnerHTML={{ __html: objet.html }}
                />
            </div>
        </div>
    })

    const aLaUne = data.aLaUne.nodes[0]
    const aLaUneImage = getImage(aLaUne.frontmatter.img)

    return (
        <Layout>
            <Seo title="Phantasy Star Chronique - Les Sortie" />
            <div className="borderCian aLaUne">
                <h1>{aLaUne.frontmatter.title}</h1>
                <GatsbyImage image={aLaUneImage} className="borderCian"  alt={`Bannière de l'article ${aLaUne.frontmatter.titre}` } />
                <div>
                    <div
                        dangerouslySetInnerHTML={{ __html: aLaUne.html }}
                    />
                </div>
            </div>
            <div className="containerArticles">
                {listArticle}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query{
        aLaUne: allMarkdownRemark(
            filter: {frontmatter: {type: {eq: "News"}}}
            sort: { fields: [frontmatter___date], order: DESC}
            limit: 1
        ) {
            nodes {
                html
                id
                frontmatter {
                    title
                    type
                    img{
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                                width: 720
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
        articles: allMarkdownRemark(
            filter: {frontmatter: {type: {eq: "News"}}}
            sort: { fields: [frontmatter___date], order: DESC}
            skip: 1
        ) {
            nodes {
                html
                frontmatter {
                    title
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
