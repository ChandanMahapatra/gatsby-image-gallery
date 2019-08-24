import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GetSVG from "../components/getSVG"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Some Images in SVG format</h1>
    <p>Welcome to Page 2. This is an image gallery made in Gatsby</p>
    <div>
      <GetSVG />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
