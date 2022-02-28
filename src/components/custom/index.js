import Vue from 'vue'
const modules = require.context(
  './',
  false,
  /\.vue$/
)
modules.keys().forEach(item => {
  let name = item.split('/').pop().replace(/\.vue/, '')
  let module = modules(item).default || modules(item)
  Vue.component(name, module)
});
