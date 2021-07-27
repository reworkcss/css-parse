3.0.0 / 2021-07-27
==================

 * update 'css' to 3.0.0

2.0.0 / 2014-06-18
==================

 * update 'css' to 2.0.0
 * depend on the 'css' package, which now contains the parser

1.7.0 / 2013-12-21
==================

 * allow # in property names
 * report filename in errors if available

1.6.0 / 2013-10-16
==================

 * add @host support. Closes #54
 * add benchmarks
 * add `source` property to `position`
 * change: relax keyframe selectors and property names

1.5.3 / 2013-09-10
==================

 * add trim shim function. Closes #45
 * fix: parser now correctly parses attributes with whitespace before colon

1.5.2 / 2013-07-28
==================

 * fix another regexp for good old FF

1.5.1 / 2013-07-23
==================

 * fix // declaration hack. Closes #42
 * fix comments for several nodes (#34).

1.5.0 / 2013-06-18
==================

 * add error reporting
 * fix @document with no vendor prefix

1.4.0 / 2013-05-22
==================

 * add `position` option support
 * add .type to all nodes. Closes #18
 * fix comments within rulesets. Closes #30
 * fix handling of unterminated comment. Closes #24

1.3.0 / 2013-05-21
==================

 * add @document parsing. Closes #29

1.2.0 / 2013-03-28
==================

  * add support for @page at-rules with nested @margin at-rules.
  * add @namespace support.
  * add support for new @supports at-rule.

1.1.0 / 2013-03-18
==================

  * add comment parsing

1.0.4 / 2012-09-17
==================

  * fix keyframes float percentages
  * fix an issue with comments containing slashes.

1.0.3 / 2012-09-01
==================

  * add component support
  * fix unquoted data uris [rstacruz]
  * fix keyframe names with no whitespace [rstacruz]
  * fix excess semicolon support [rstacruz]

1.0.2 / 2012-09-01
==================

  * fix IE property hack support [rstacruz]
  * fix quoted strings in declarations [rstacruz]

1.0.1 / 2012-07-26
==================

  * change "selector" to "selectors" array

1.0.0 / 2010-01-03
==================

  * Initial release
