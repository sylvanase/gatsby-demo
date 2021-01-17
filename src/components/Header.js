/*
 * @Author: sylvanas
 * @Date: 2021-01-17 18:22:23
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-17 18:29:02
 * @Description:
 */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <p>{data.site.siteMetadata.author}</p>
      <p>{data.site.siteMetadata.title}</p>
    </div>
  )
}
