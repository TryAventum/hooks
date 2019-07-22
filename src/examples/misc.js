var AventumHooks = require('../../dist/aventum-hooks')

var hooks = AventumHooks.createHooks()

/**
 * Asynchronous Filters
 */
hooks.addFilter(
  'AwesomeFilter',
  'vendor/plugin/function',
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
  'AwesomeFilter',
  'vendor/plugin/function',
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
  'AwesomeFilter',
  'vendor/plugin/function',
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
  'AwesomeAction',
  'vendor/plugin/function',
  (arg1, arg2, arg3) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('Action1', arg1, arg2, arg3)
        resolve(arg1)
      }, 300)
    })
  },
  10
)
hooks.addAction(
  'AwesomeAction',
  'vendor/plugin/function',
  (arg1, arg2, arg3) => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('Action2', arg1, arg2, arg3)
        resolve(arg1)
      }, 300)
    })
  },
  10
)

/**
 * This function will run the async filters and actions
 */
const AsyncFunction = async () => {
  var result = await hooks.applyFilters('AwesomeFilter', 25, 1, 2)
  await hooks.doAction('AwesomeAction', 25, 6, 30)
  console.log(result)
}

AsyncFunction()

/**
 * Synchronous Actions
 */
hooks.addAction(
  'AwesomeActionSync',
  'vendor2/plugin/function',
  (arg1, arg2) => {
    console.log('AwesomeActionSync1', arg1, arg2)
  },
  10
)
hooks.addAction(
  'AwesomeActionSync',
  'vendor2/plugin/function',
  (arg1, arg2) => {
    console.log('AwesomeActionSync2', arg1, arg2)
  },
  10
)
hooks.addAction(
  'AwesomeActionSync',
  'vendor2/plugin/function',
  (arg1, arg2) => {
    console.log('AwesomeActionSync3', arg1, arg2)
  },
  10
)

hooks.doActionSync('AwesomeActionSync', 10, 20)

/**
 * Synchronous Filters
 */
hooks.addFilter(
  'AwesomeFilterSync',
  'vendor2/plugin/function',
  (content, arg1, arg2) => {
    return content + arg1 + arg2
  },
  10
)
hooks.addFilter(
  'AwesomeFilterSync',
  'vendor2/plugin/function',
  (content, arg1, arg2) => {
    return content + arg1 + arg2
  },
  10
)
hooks.addFilter(
  'AwesomeFilterSync',
  'vendor2/plugin/function',
  (content, arg1, arg2) => {
    return content + arg1 + arg2
  },
  10
)

console.log(hooks.applyFiltersSync('AwesomeFilterSync', 5, 1, 2))
