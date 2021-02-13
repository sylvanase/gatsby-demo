/*
 * @Author: sylvanas
 * @Date: 2021-02-13 14:11:56
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-02-13 14:47:56
 * @Description:
 */
const axios = require("axios")
const pluralize = require("pluralize")
const createNodeHelpers = require("gatsby-node-helpers").default
async function sourceNodes({ actions }, configOptions) {
  const { createNode } = actions
  const { apiURL, contentTypes } = configOptions
  const types = contentTypes
    .map(type => type.toLowerCase())
    .map(type => pluralize(type))
  // 从外部数据源获取数据
  let final = await getContents(types, apiURL)
  console.log(final)
  // 添加数据节点
  for (let [key, value] of Object.entries(final)) {
    // 构建数据节点对象
    const { createNodeFactory } = createNodeHelpers({
      typePrefix: key,
    })
    const createNodeObject = createNodeFactory("content")
    // 根据数据节点对象创建节点
    value.forEach(item => {
      createNode(createNodeObject(item))
    })
  }
}

async function getContents(types, apiUrl) {
  const size = types.length
  let index = 0
  const final = {}
  await loadContents()
  async function loadContents() {
    if (index === size) {
      return
    }
    let { data } = await axios.get(`${apiUrl}/${types[index]}`)
    final[types[index++]] = data
    await loadContents()
  }
  return final
}

module.exports = {
  sourceNodes,
}
