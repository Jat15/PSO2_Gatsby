import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Articles from "../components/articles"
import "./index.sass"


const IndexPage = ({data}) => {

    return (
        <Layout>
            <Seo title="Phantasy Star Chronique - Les Sortie" />
            <Articles data={data.aLaUne} style="first" />
            <div
                className="containerArticles"
            >
                <Articles data={data.articles} style="article" />
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
                id
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
