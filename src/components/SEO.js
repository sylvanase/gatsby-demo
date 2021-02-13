/*
 * @Author: sylvanas
 * @Date: 2021-02-13 15:05:22
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-02-13 15:15:59
 * @Description:
 */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

export default function SEO({ title, description, meta, lang }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
      ].concat(meta)}
    ></Helmet>
  )
}

SEO.defaultProps = {
  description: "test2222",
  meta: [
    {
      name: "tea",
    },
  ],
  lang: "en",
}
