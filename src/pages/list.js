/*
 * @Author: sylvanas
 * @Date: 2021-01-17 18:25:34
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-17 19:23:15
 * @Description:
 */
import React from "react"
import Header from "../components/Header"
import { graphql } from "gatsby"

export default function List({ data }) {
  return (
    <div>
      listpage
      <Header></Header>
      {data.allMarkdownRemark.nodes.map(post => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
        html
        id
      }
    }
  }
`
