yaks = 
  DOM: require('./dom/index.js')
  modules: require('./modules/index.js')
  UTILS: require('./utils/index.js')
  registerAction: require('./modules/actions.js').registerAction

window.yaks = yaks
module.exports = yaks
