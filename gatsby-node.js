/*
 * @Author: sylvanas
 * @Date: 2021-01-17 17:55:31
 * @LastEditors: sylvanas
 * @LastEditTime: 2021-01-17 18:05:23
 * @Description:
 */
function createPages({ actions }) {
  // 获取模板绝对路径
  const template = require.resolve("./src/templates/person.js")
  // 获取组件所需数据
  const persons = [
    { name: "zoe", age: 20, slug: "zoe" },
    { name: "joy", age: 30, slug: "joy" },
  ]
  // 根据模板和数据创建页面
  const { createPage } = actions
  persons.forEach(person => {
    createPage({
      // 模板绝对路径
      component: template,
      // 访问地址
      path: `/person/${person.slug}`,
      // 传递给模板的数据
      context: person,
    })
  })
}

module.exports = { createPages }
