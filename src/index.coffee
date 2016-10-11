yaks =
  DOM: require('./dom/index.js')
  modules: require('./modules/index.js')
  UTILS: require('./utils/index.js')
  registerAction: require('./modules/actions.js').registerAction

console.log 'yo'

window.yaks = yaks
module.exports = yaks
