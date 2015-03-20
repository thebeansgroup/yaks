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

module.exports = new Storage()
