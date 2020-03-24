import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const About = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <img src={data.image}></img>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "md" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
            }
          }
        }
      }
    }
  }
`
