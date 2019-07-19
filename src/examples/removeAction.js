var AventumHooks = require('../../dist/aventum-hooks')

var hooks = AventumHooks.createHooks()

/**
 * Asynchronous Actions
 */

hooks.addAction(
  'awesome_action',
  'vendor1/plugin/function',
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
  'vendor2/plugin/function',
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

hooks.removeAction( 'awesome_action', 'vendor1/plugin/function' )

/**
 * This function will run the async filters and actions
 */
const AsyncFunction = async () => {
  await hooks.doAction('awesome_action', 25, 6, 30)
}

AsyncFunction()

/**
 * Synchronous Actions
 */
hooks.addAction(
  'awesome_action_sync',
  'vendor3/plugin/function',
  (arg1, arg2) => {
    console.log('awesome_action_sync1', arg1, arg2)
  },
  10
)
hooks.addAction(
  'awesome_action_sync',
  'vendor4/plugin/function',
  (arg1, arg2) => {
    console.log('awesome_action_sync2', arg1, arg2)
  },
  10
)
hooks.addAction(
  'awesome_action_sync',
  'vendor5/plugin/function',
  (arg1, arg2) => {
    console.log('awesome_action_sync3', arg1, arg2)
  },
  10
)

hooks.removeAction( 'awesome_action_sync', 'vendor4/plugin/function' )

hooks.doActionSync('awesome_action_sync', 10, 20)
