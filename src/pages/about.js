import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/style.css"

class AboutPage extends React.Component {

  render() {
    const props = this.props.data.allMarkdownRemark.edges[0]
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <SEO title="About" />
        <article className="about">
          <div className="header">
            <img
              alt={props.node.frontmatter.thumbnail.childImageSharp.fluid.originalName}
              src={props.node.frontmatter.thumbnail.childImageSharp.fluid.src}
              className="avatar"
            />
            <div style={{marginTop:"2px"}}>
              <strong style={{ fontSize: "25px" }}>{props.node.frontmatter.title}</strong>
              <div style={{marginTop:"5px"}}>
                <small>{props.node.frontmatter.description}</small>
              </div>
            </div>
          </div>
          <section dangerouslySetInnerHTML={{ __html: props.node.html }} />
        </article>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter:{
        frontmatter:{
          folder:{eq:"about"}
        }
      }
    ){
      edges{
        node{
          excerpt
          html
          fields{
            slug
          }
          frontmatter{
            title
            description
            thumbnail{
              childImageSharp {
                fluid(maxWidth: 250, maxHeight: 250, cropFocus: CENTER) {
                  src
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`
