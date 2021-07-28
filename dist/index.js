
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cheeseswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./cheeseswap-sdk.cjs.development.js')
}
