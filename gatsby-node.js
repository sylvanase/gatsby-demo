const path = require("path")

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

function onCreateNode({ node, actions }) {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    console.log(slug)
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// const createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const template = require.resolve("./src/templates/article.js")
//   const res = await graphql(``)
//   res.data.allMarkdownRemark.edges.forEach(edge => {
//     createPage({
//       component: template,
//       path: `/blog/${edge.node.fields.slug}`,
//       context: { slug: edge.node.fields.slug },
//     })
//   })
// }

module.exports = { createPages, onCreateNode }
