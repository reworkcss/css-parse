
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
      var css = read(path.join('test', 'cases', file + '.css'), 'utf8');
      var json = read(path.join('test', 'cases', file + '.json'), 'utf8');
      var ret = parse(css, { filename: file + '.css' });
      ret = JSON.stringify(ret, null, 2);
      ret.should.equal(json);
    })
  });

  it('should save the filename and source', function(){
    var css = 'booty {\n  size: large;\n}\n';
    var ast = parse(css, {
      filename: 'booty.css'
    });

    var position = ast.stylesheet.rules[0].position
    position.start.should.be.ok;
    position.end.should.be.ok;
    position.filename.should.equal('booty.css');
    position.source.should.equal(css);
  });
})
