import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link className="link" to="/blog/">Visit the Blog Page</Link> <br />
    <Link to="/using-typescript/" className="link">Go to "Using TypeScript"</Link>
    
    <h1 style={{fontSize:'20px'}}>Developed by Muhammad Asghar</h1>
  </Layout>
)

export default IndexPage
