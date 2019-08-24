import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const GetImages = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          extension: { regex: "/(png)/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            name
            relativePath
            childImageSharp {
              fluid(maxWidth: 200, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.images.edges.map(image => (
        <Img
          alt={image.node.name}
          key={image.node.childImageSharp.fluid.src}
          fluid={image.node.childImageSharp.fluid}
          style={{ margin: "20px 20px" }}
        />
      ))}
    </div>
  )
}

export default GetImages

/*
Project.propTypes = {
  data: PropTypes.shape({
    images: PropTypes.object.isRequired,
  }).isRequired,
}

export const data = graphql`
  query {
    images: allFile(
      filter: {
        extension: { regex: "/(png)/" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      edges {
        node {
          relativeDirectory
          name
          relativePath
        }
      }
    }
  }
`

*/

/*
const GetImages = ({
  pageContext: { slug, prev, next },
  data: { project: postNode, images },
}) => {
  return (
    <div>
      {images.nodes.map(image => (
        <Img
          alt={image.name}
          key={image.childImageSharp.fluid.src}
          fluid={image.childImageSharp.fluid}
          style={{ margin: "3rem 0" }}
        />
      ))}
    </div>
  )
}

export default GetImages

export const query = graphql`
  query allFile {
    images: allFile(
      filter: { absolutePath: { regex: "/src/images" } 
      }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`
*/
