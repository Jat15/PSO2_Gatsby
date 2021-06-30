import React from "react";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Pages = ({data}) =>{
    const image = getImage(data.markdownRemark.frontmatter.img)



    return <Layout>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <GatsbyImage image={image} alt={`Bannière du jeu ${data.markdownRemark.frontmatter.title}` } />
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