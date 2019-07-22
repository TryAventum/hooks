var AventumHooks = require('../../dist/aventum-hooks')

var hooks = AventumHooks.createHooks()

/**
 * Asynchronous Actions
 */

hooks.addAction(
  'AwesomeAction',
  'vendor1/plugin/function',
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
  'vendor2/plugin/function',
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

hooks.removeAction( 'AwesomeAction', 'vendor1/plugin/function' )

/**
 * This function will run the async filters and actions
 */
const AsyncFunction = async () => {
  await hooks.doAction('AwesomeAction', 25, 6, 30)
}

AsyncFunction()

/**
 * Synchronous Actions
 */
hooks.addAction(
  'AwesomeActionSync',
  'vendor3/plugin/function',
  (arg1, arg2) => {
    console.log('AwesomeActionSync1', arg1, arg2)
  },
  10
)
hooks.addAction(
  'AwesomeActionSync',
  'vendor4/plugin/function',
  (arg1, arg2) => {
    console.log('AwesomeActionSync2', arg1, arg2)
  },
  10
)
hooks.addAction(
  'AwesomeActionSync',
  'vendor5/plugin/function',
  (arg1, arg2) => {
    console.log('AwesomeActionSync3', arg1, arg2)
  },
  10
)

hooks.removeAction( 'AwesomeActionSync', 'vendor4/plugin/function' )

hooks.doActionSync('AwesomeActionSync', 10, 20)
