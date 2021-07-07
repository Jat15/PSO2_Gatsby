import React from "react";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./normal.sass"

const Pages = ({data}) =>{
    const image = getImage(data.markdownRemark.frontmatter.img) 

    return <Layout>
            <Seo title={`${data.markdownRemark.frontmatter.title} de ${data.markdownRemark.frontmatter.game} `} />
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            {
                image?
                    <GatsbyImage image={image} className="borderCian" alt={`Bannière du jeu ${data.markdownRemark.frontmatter.title}` } />
                    :""
            }
            <div>
                <div
                    dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                />
            </div>
        </Layout>
}


export const query = graphql`
    query ($slug: String) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                game
                img {
                    childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED,
                        formats: [AUTO, WEBP, AVIF],
                        width: 720
                        )
                    }
                }
            }
        }
    }
`

export default Pages