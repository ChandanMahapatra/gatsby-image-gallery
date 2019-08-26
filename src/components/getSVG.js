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
        <div>
          <img
            src={image.node.publicURL}
            alt={image.node.name}
            type="text/plain"
          />
          <a href={image.node.publicURL} download>
            Download SVG
          </a>
          <a
            href={
              "https://raw.githubusercontent.com/ChandanMahapatra/gatsby-image-gallery/master/src/images/photos/" +
              image.node.name +
              ".svg"
            }
            target="_blank"
          >
            Link to SVG code
          </a>
        </div>
      ))}
    </div>
  )
}

export default GetSVG

/*
exporting object with svg
        <div>
          <img src={image.node.publicURL} alt={image.node.name} />
          <object data={image.node.publicURL} type="text/plain" />
          <svg src={image.node.publicURL} type="text/plain" />
          <a href={image.node.publicURL} download>
            Download Image
          </a>
          <a>Link to Svg code</a>
        </div>

*/
