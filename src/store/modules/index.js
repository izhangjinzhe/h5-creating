
const requireComponent = require.context(
  './',
  false,
  /\.js$/
)
let modules = {}

requireComponent.keys().forEach(fileName => {
  const moduleName = fileName.split('/').pop().replace('.js', '')
  modules[moduleName] = requireComponent(fileName).default || requireComponent(fileName)
})

export default modules