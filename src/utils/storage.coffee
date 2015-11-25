canUseDOM = require('./canUseDOM.js')

# Browser Storage Module
#
# @module
# @author Sam Ternent
#
class Storage
  STORAGE = true
  STORAGE_TESTED = false

  # check if local storage is supported
  _checkStorage = ->
    if STORAGE_TESTED then STORAGE else _testStorage()

  # test for local stoarge
  _testStorage = ->
    STORAGE_TESTED = true
    if typeof window.Storage?
      try
        window.localStorage.setItem 'teststorage', 1
        window.localStorage.removeItem 'teststorage'
        STORAGE = true
      catch e
        STORAGE = false
    else
      STORAGE = false

  # Set local storage object
  #
  # @example Set local storage object
  #   yaks.UTILS.storage.setLocal('name', {storage: object});
  #
  # @param [String] name key/name
  # @param [Object] object to be stored
  #
  setLocal: (name, value) ->
    window.localStorage.setItem(name, JSON.stringify(value))    if _checkStorage()

  # Set session storage object
  #
  # @example Set session storage object
  #   yaks.UTILS.storage.setSession('name', {storage: object});
  #
  # @param [String] name key/name
  # @param [Object] object to be stored
  #
  setSession: (name, value) ->
    window.sessionStorage.setItem(name, JSON.stringify(value))  if _checkStorage()

  # Set cookie 
  #
  # @example Set cookie
  #   yaks.UTILS.storage.setCookie('name', 'value');
  #
  # @param [String] name key/name
  # @param [String] value content to be stored
  # @param [Number|string|Date] end When the cookie expires
  # @param [String] path page in which the cookie is active
  # @param [String] domain domain in which the cookie is active
  # @param [Boolean] secure If the cookie is secure
  #
  setCookie: (name, value, end, path, domain, secure) ->
    return null unless canUseDOM
    if !name or /^(?:expires|max\-age|path|domain|secure)$/i.test(name)
      return false
    sExpires = ''
    if end
      switch end.constructor
        when Number
          sExpires = if end == Infinity then '; expires=Fri, 31 Dec 9999 23:59:59 GMT' else '; max-age=' + end
        when String
          sExpires = '; expires=' + end
        when Date
          sExpires = '; expires=' + end.toUTCString()
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value) + sExpires + (if domain then '; domain=' + domain else '') + (if path then '; path=' + path else '') + (if secure then '; secure' else '')
    true

  # Get local storage object
  #
  # @example Get local storage object
  #   yaks.UTILS.storage.getLocal('name');
  #
  # @param [String] name key/name
  # @param [Object] object to be stored
  #
  # @return [Object]
  #
  getLocal: (name) ->
    JSON.parse(window.localStorage.getItem(name))               if _checkStorage()

  # Get session storage object
  #
  # @example Get session storage object
  #   yaks.UTILS.storage.getSession('name');
  #
  # @param [String] name key/name
  # @param [Object] object to be stored
  #
  # @return [Object]
  #
  getSession: (name) ->
    JSON.parse(window.sessionStorage.getItem(name))             if _checkStorage()

  # Get cookie object
  #
  # @example Get cookie object
  #   yaks.UTILS.storage.getCookie('name');
  #
  # @param [String] name key/name
  #
  # @return [Object]
  #
  getCookie: (name) ->
    return null unless canUseDOM
    decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(name).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) or null

  # Remove local storage object
  #
  # @example Remove local storage object
  #   yaks.UTILS.storage.removeLocal('name');
  #
  # @param [String] name key/name
  # @param [Object] object to be stored
  #
  removeLocal: (name) ->
    window.localStorage.removeItem(name)                        if _checkStorage()

  # Remove session storage object
  #
  # @example Remove session storage object
  #   yaks.UTILS.storage.removeSession('name');
  #
  # @param [String] name key/name
  # @param [Object] object to be stored
  #
  removeSession: (name) ->
    window.sessionStorage.removeItem(name)                      if _checkStorage()

  # Remove cookie
  #
  # @example Remove cookie
  #   yaks.UTILS.storage.removeCookie('name');
  #
  # @param [String] name key/name
  # @param [String] path page in which the cookie is active
  # @param [String] domain domain in which the cookie is active
  #
  removeCookie: (name, path, domain) ->
    return null unless canUseDOM
    if !name or @getCookie(name) is null
      return false
    document.cookie = encodeURIComponent(name) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (if domain then '; domain=' + domain else '') + (if path then '; path=' + path else '')
    true


module.exports = new Storage()
