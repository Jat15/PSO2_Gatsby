import React from "react";
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Pages = ({params, data}) =>{

    const image = getImage(data.markdownRemark.frontmatter.img)

    return <Layout>
        <h1>{data.markdownRemark.frontmatter.titre}</h1>
        <GatsbyImage image={image} alt="Blablabla" />
        <div
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />


    </Layout>
}


export const query = graphql`
    query($id: String){
        markdownRemark(id: {eq : $id}) {
            html
            frontmatter {
                titre
                img{
                    childImageSharp {
                        gatsbyImageData(
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }   
        }
    }
`

export default Pages