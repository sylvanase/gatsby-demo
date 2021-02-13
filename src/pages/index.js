import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"

export default function Home({ data }) {
  console.log(data, "home")
  return (
    <>
      <SEO title="index" />
      <div>
        <Link to="/person/zoe">zoe</Link>
        <Link to="/person/joy">joy</Link>
        <p>{data.site.siteMetadata.author}</p>
        <p>{data.site.siteMetadata.title}</p>
      </div>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`
