import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const GetSVG = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          extension: { regex: "/(svg)/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            name
            relativePath
            publicURL
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.images.edges.map(image => (
        <img src={image.node.publicURL} alt={image.node.name} />
      ))}
    </div>
  )
}

export default GetSVG
