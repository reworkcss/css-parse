
/**
 * Module dependencies.
 */

var parse = require('..')
  , fs = require('fs')
  , path = require('path')
  , read = fs.readFileSync
  , readdir = fs.readdirSync;

describe('parse(str)', function(){
  readdir('test/cases').forEach(function(file){
    if (~file.indexOf('json')) return;
    file = path.basename(file, '.css');
    it('should parse ' + file, function(){
      var css = read(path.join('test', 'cases', file + '.css'), 'utf8').trim();
      var json = read(path.join('test', 'cases', file + '.json'), 'utf8').trim();
      var ret = parse(css, { position: true });
      ret = JSON.stringify(ret, null, 2);
      ret.should.equal(json);
    })
  });
})
