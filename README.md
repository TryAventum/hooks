# Aventum Hooks

A universal, lightweight & efficient EventManager/PluginsSystem/MiddlewareManager/ExtendabilitySystem for JavaScript built on top of the amazing [@wordpress/hooks](https://www.npmjs.com/package/@wordpress/hooks) with one extra addition which is adding asynchronous hooks support.

## Installation

#### npm:

```shell
npm install @aventum/hooks --save
```

#### CDN:

```html
<!-- unpkg -->
<script src="https://unpkg.com/@aventum/hooks@latest"></script>
```

## Usage

#### ES2015:

```javascript
import * as AventumHooks from '@aventum/hooks'
var hooks = AventumHooks.createHooks()
```

#### Script:

```html
<script src="path/to/aventum-hooks.js"></script>
<script>
  var hooks = AventumHooks.createHooks()
</script>
```

#### Node.js:

```javascript
var AventumHooks = require('@aventum/hooks')
var hooks = AventumHooks.createHooks()
```

## Examples

> These examples are taken from src/test/index.manual.test.js file, you can run this file using `node ./src/examples/misc.js` if you have Node.js installed, there will be other example files worth to check all of them will be able to run using `node ./src/examples/[fileName].js`.

#### Example 1

```javascript
var hooks = AventumHooks.createHooks()

/**
 * Asynchronous Filters
 */
hooks.addFilter(
  'AwesomeFilter',
  'vendor/plugin/function',
  (content, arg1, arg2) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
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
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
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
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(content + arg1 + arg2)
      }, 300)
    })
  },
  10
)

const AsyncFunction = async () => {
  var result = await hooks.applyFilters('AwesomeFilter', 25, 1, 2)
  console.log(result)
}

AsyncFunction()
```

The result will be:

```shell
34
```

---

#### Example 2

```javascript
var hooks = AventumHooks.createHooks()

/**
 * Asynchronous Actions
 */

hooks.addAction(
  'AwesomeAction',
  'vendor/plugin/function',
  (arg1, arg2, arg3) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
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
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('Action2', arg1, arg2, arg3)
        resolve(arg1)
      }, 300)
    })
  },
  10
)

const AsyncFunction = async () => {
  await hooks.doAction('AwesomeAction', 25, 6, 30)
}

AsyncFunction()
```

The result will be:

```shell
Action1 25 6 30
Action2 25 6 30
```

---

#### Example 3

```javascript
var hooks = AventumHooks.createHooks()

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
```

The result will be:

```shell
AwesomeActionSync1 10 20
AwesomeActionSync2 10 20
AwesomeActionSync3 10 20
```

---

#### Example 4

```javascript
var hooks = AventumHooks.createHooks()

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
```

The result will be:

```shell
14
```

---

## API Usage

- `createHooks()`
- `addAction( 'hookName', 'namespace', callback, priority )`
- `addFilter( 'hookName', 'namespace', callback, priority )`
- `removeAction( 'hookName', 'namespace' )`
- `removeFilter( 'hookName', 'namespace' )`
- `removeAllActions( 'hookName' )`
- `removeAllFilters( 'hookName' )`
- `doAction( 'hookName', arg1, arg2, moreArgs, finalArg )`
- `doActionSync( 'hookName', arg1, arg2, moreArgs, finalArg )`
- `applyFilters( 'hookName', content, arg1, arg2, moreArgs, finalArg )`
- `applyFiltersSync( 'hookName', content, arg1, arg2, moreArgs, finalArg )`
- `doingAction( 'hookName' )`
- `doingFilter( 'hookName' )`
- `didAction( 'hookName' )`
- `didFilter( 'hookName' )`
- `hasAction( 'hookName' )`
- `hasFilter( 'hookName' )`
- `actions`
- `filters`

> The namespace is a unique string that can only contain numbers, letters, dashes, periods, underscores and slashes, it used to identify the callback, the best practice to make it in the form `vendor/plugin/function`

### Events on action/filter add or remove

Whenever an action or filter is added or removed, a matching `hookAdded` or `hookRemoved` action is triggered.

- `hookAdded` action is triggered when `addFilter()` or `addAction()` method is called, passing values for `hookName`, `functionName`, `callback` and `priority`.
- `hookRemoved` action is triggered when `removeFilter()` or `removeAction()` method is called, passing values for `hookName` and `functionName`.

### The `all` hook

In non-minified builds developers can register a filter or action that will be called on _all_ hooks, for example: `addAction( 'all', 'namespace', callbackFunction );`. Useful for debugging, the code supporting the `all` hook is stripped from the production code for performance reasons.

## Build & Test Using Docker

```shell
docker build -t aventum-hooks .

# Test
docker run -it -v /app/node_modules -v $PWD:/app aventum-hooks npm run test

# Build
docker run -it -v /app/node_modules -v $PWD:/app aventum-hooks npm run build
```
