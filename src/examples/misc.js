var AventumHooks = require('../../dist/aventum-hooks')

var hooks = AventumHooks.createHooks()

/**
 * Asynchronous Filters
 */
hooks.addFilter(
  'awesome_filter',
  'namespace',
  (content, arg1, arg2) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(content + arg1 + arg2)
      }, 300)
    })
  },
  10
)

hooks.addFilter(
  'awesome_filter',
  'namespace',
  (content, arg1, arg2) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(content + arg1 + arg2)
      }, 300)
    })
  },
  10
)

hooks.addFilter(
  'awesome_filter',
  'namespace',
  (content, arg1, arg2) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(content + arg1 + arg2)
      }, 300)
    })
  },
  10
)

/**
 * Asynchronous Actions
 */

hooks.addAction(
  'awesome_action',
  'namespace',
  (content, arg1, arg2) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('action1', content, arg1, arg2)
        resolve(content)
      }, 300)
    })
  },
  10
)
hooks.addAction(
  'awesome_action',
  'namespace',
  (content, arg1, arg2) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('action2', content, arg1, arg2)
        resolve(content)
      }, 300)
    })
  },
  10
)

/**
 * This function will run the async filters and actions
 */
const AsyncFunction = async () => {
  var result = await hooks.applyFilters('awesome_filter', 25, 1, 2)
  await hooks.doAction('awesome_action', 25, 6, 30)
  console.log(result)
}

AsyncFunction()

/**
 * Synchronous Actions
 */
hooks.addAction(
  'awesome_action_sync',
  'namespace2',
  (arg1, arg2) => {
    console.log('awesome_action_sync1', arg1, arg2)
  },
  10
)
hooks.addAction(
  'awesome_action_sync',
  'namespace2',
  (arg1, arg2) => {
    console.log('awesome_action_sync2', arg1, arg2)
  },
  10
)
hooks.addAction(
  'awesome_action_sync',
  'namespace2',
  (arg1, arg2) => {
    console.log('awesome_action_sync3', arg1, arg2)
  },
  10
)

hooks.doActionSync('awesome_action_sync', 10, 20)

/**
 * Synchronous Filters
 */
hooks.addFilter(
  'awesome_filter_sync',
  'namespace2',
  (content, arg1, arg2) => {
    return content + arg1 + arg2
  },
  10
)
hooks.addFilter(
  'awesome_filter_sync',
  'namespace2',
  (content, arg1, arg2) => {
    return content + arg1 + arg2
  },
  10
)
hooks.addFilter(
  'awesome_filter_sync',
  'namespace2',
  (content, arg1, arg2) => {
    return content + arg1 + arg2
  },
  10
)

console.log(hooks.applyFiltersSync('awesome_filter_sync', 5, 1, 2))
