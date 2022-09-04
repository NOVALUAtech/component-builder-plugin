const path = require("path")
const fs = require("fs")

const templateHtmlPath = path.resolve("public/", "template.html")
const indexHtmlPath = path.resolve("public/", "index.html")
const componentsFolderPath = path.resolve("src/components/")

const buildComponents = () => {
  const componentsPaths = getComponents()

  renderComponents(componentsPaths)
}

const getComponents = () => {
  const components = fs.readdirSync(componentsFolderPath)
  let componentsPath = []

  components.forEach((component) => {
    componentsPath.push({
      name: component,
      path: path.resolve(`src/components/${component}/${component}.html`),
    })
  })

  return componentsPath
}

const renderComponents = (componentsPath) => {
  const indexTemplateHtml = fs.readFileSync(templateHtmlPath, "utf-8")
  let updatedIndexHtml

  componentsPath.forEach((component, index) => {
    const componentContent = fs.readFileSync(component.path, "utf-8")

    if (index > 0) {
      updatedIndexHtml = updatedIndexHtml.replace(`{${component.name}}`, componentContent)
    } else {
      updatedIndexHtml = indexTemplateHtml.replace(
        `{${component.name}}`,
        componentContent
      )
    }
  })
  fs.writeFileSync(indexHtmlPath, updatedIndexHtml)
}

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    name: "@novalua/component-builder-plugin",
    onChange() {
      buildComponents()
    },
    resolve: { input: [".html"], output: [".html"] },
    load() {
      buildComponents()
    },
  }
}
