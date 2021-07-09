import React from "react";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "./normal.sass"

const Pages = ({data}) =>{
    const image = getImage(data.subTab.markdownPage.frontmatter.img) 
    
    return <Layout>
            <Seo title={`${data.subTab.markdownPage.frontmatter.title} de ${data.subTab.markdownPage.frontmatter.route[0]} `} />
            <h1>{data.subTab.markdownPage.frontmatter.title}</h1>
            {
                image?
                    <GatsbyImage image={image} className="borderCian" alt={`Bannière du jeu ${data.subTab.markdownPage.frontmatter.title}` } />
                    :""
            }
            <div>
                <div
                    dangerouslySetInnerHTML={{ __html: data.subTab.markdownPage.html }}
                />
            </div>
        </Layout>

}


export const query = graphql`
    query ($slug: String) {
        subTab(slug: {eq: $slug}) {
            id
            markdownPage {
                html
                frontmatter {
                    route
                    title
                    img {
                        childImageSharp {
                            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], width: 720)
                        }
                    }
                }
            }
        }
    }

`

export default Pages
