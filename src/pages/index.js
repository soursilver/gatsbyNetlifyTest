import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Home = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <div className="logo">
        <h1>{data.title}</h1>
      </div>
      <div className="inner">
        <div className="image-fit">
          <img
            src="https://templated.co/items/demos/caminar/images/pic02.jpg"
            alt=""
          ></img>
        </div>
        <div className="s2">
          <header className="s2-header">
            <h2>Portfolio</h2>
            <hr></hr>
            <p>Art. Photography. Everything in between.</p>
          </header>
        </div>
        <div className="gallery">
          <div className="column">
            <img src="https://templated.co/items/demos/caminar/images/pic03.jpg"></img>
            <img src="https://templated.co/items/demos/caminar/images/pic01.jpg"></img>
            <img src="https://templated.co/items/demos/caminar/images/pic04.jpg"></img>
          </div>
          <div className="column">
            <div className="textbox">
              <p>{data.intro}</p>
            </div>
            <img src="https://templated.co/items/demos/caminar/images/pic05.jpg"></img>
            <img src="https://templated.co/items/demos/caminar/images/pic01.jpg"></img>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

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
