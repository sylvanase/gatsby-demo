/*
 * @Author: sylvanas
 * @Date: 2021-01-17 18:58:47
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-17 19:08:36
 * @Description:
 */
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Product({ data }) {
  return data.allProductsJson.nodes.map(node => {
    return (
      <div key={node.title}>
        <p>{node.title}</p>
        <p>{node.address}</p>
        <div style={{ width: 400 }}>
          <Img fluid={node.url.childImageSharp.fluid}></Img>
        </div>
      </div>
    )
  })
}

export const query = graphql`
  query {
    allProductsJson {
      nodes {
        address
        title
        price
        url {
          childImageSharp {
            fluid {
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
    }
  }
`
