import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GetImages from "../components/getimages"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Some Images in PNG format</h1>
    <p>This is an image gallery made in Gatsby</p>
    <div>
      <GetImages />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
