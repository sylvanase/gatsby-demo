/*
 * @Author: sylvanas
 * @Date: 2021-01-17 17:57:17
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-17 18:07:43
 * @Description:
 */
import React from "react"

export default function Person({ pageContext }) {
  return (
    <div>
      <span>{pageContext.name}</span>
      <span>{pageContext.age}</span>
    </div>
  )
}
