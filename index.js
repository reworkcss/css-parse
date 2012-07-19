
/**
 * Module dependencies.
 */

var debug = require('debug')('css-parse');

module.exports = function(css){

  /**
   * Parse stylesheet.
   */

  function stylesheet() {
    var rules = [];
    var node;
    comments();
    while (node = atrule() || rule()) {
      comments();
      rules.push(node);
    }
    return { stylesheet: { rules: rules }};
  }

  /**
   * Match `re` and return captures.
   */

  function match(re) {
    var m = re.exec(css);
    if (!m) return;
    css = css.slice(m[0].length);
    return m;
  }

  /**
   * Parse whitespace.
   */

  function whitespace() {
    match(/^\s*/);
  }

  /**
   * Parse comments;
   */

  function comments() {
    while (comment()) ;
  }

  /**
   * Parse comment.
   */

  function comment() {
    if ('/' == css[0] && '*' == css[1]) {
      var i = 2;
      while ('*' != css[i] && '/' != css[i + 1]) ++i;
      i += 2;
      css = css.slice(i);
      whitespace();
      return true;
    }
  }

  /**
   * Parse selector.
   */

  function selector() {
    var m = match(/^([^{]+)/);
    if (!m) return;
    return m[0].trim();
  }

  /**
   * Parse declaration.
   */

  function declaration() {
    // prop
    var prop = match(/^([-\w]+)\s*/);
    if (!prop) return;
    prop = prop[0];

    // :
    if (!match(/^:\s*/)) return;

    // val
    var val = match(/^([^};]+)\s*/);
    if (!val) return;
    val = val[0].trim();

    // ;
    match(/^;\s*/);

    return { property: prop, value: val };
  }

  /**
   * Parse keyframe.
   */

  function keyframe() {
    var m;
    var vals = [];

    while (m = match(/^(from|to|\d+%)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }

    if (!vals.length) return;

    return {
      values: vals,
      declarations: declarations()
    };
  }

  /**
   * Parse keyframes.
   */

  function keyframes() {
    var m = match(/^@([-\w]+)?keyframes */);
    if (!m) return;
    var vendor = m[1];

    // identifier
    var m = match(/^([-\w]+)\s+/);
    if (!m) return;
    var name = m[1];

    // {
    if (!match(/^{\s*/)) return;
    comments();

    var frame;
    var frames = [];
    while (frame = keyframe()) {
      frames.push(frame);
      comments();
    }

    // }
    if (!match(/^}\s*/)) return;

    return {
      name: name,
      vendor: vendor,
      keyframes: frames
    };
  }

  /**
   * Parse declarations.
   */

  function declarations() {
    var decls = [];

    // {
    if (!match(/^{\s*/)) return;
    comments();
  
    // declarations
    var decl;
    while (decl = declaration()) {
      decls.push(decl);
      comments();
    }
  
    // }
    if (!match(/^}\s*/)) return;
    return decls;
  }

 /**
  * Parse at rule.
  */
  
  function atrule() {
    return keyframes();
  }

  /**
   * Parse rule.
   */
  
  function rule() {
    var node = { selector: selector() };
  
    // selector
    if (!node.selector) return;
    comments();
  
    node.declarations = declarations();
    return node;
  }
  
  return stylesheet();
};