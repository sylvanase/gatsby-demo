/*
 * @Author: sylvanas
 * @Date: 2021-01-17 20:42:47
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-17 20:52:09
 * @Description:
 */
import React from "react"
import { graphql } from "gatsby"

export default function Article({ data }) {
  return (
    <div>
      <span>{data.markdownRemark.frontmatter.title}</span>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
      id
    }
  }
`
