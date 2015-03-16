yaks = 
  DOM: require('./dom/index.js.coffee')
  modules: require('./modules/index.js.coffee')
  UTILS: require('./utils/index.js.coffee')

  # Quick access
  registerAction: require('./modules/actions.js.coffee').registerAction

window.yaks = yaks
module.exports = yaks