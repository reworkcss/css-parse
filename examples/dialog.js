
/**
 * Module dependencies.
 */

var parse = require('..')
  , fs = require('fs')
  , read = fs.readFileSync
  , css = read('examples/dialog.css', 'utf8');

console.log(JSON.stringify(parse(css), null, 2));