'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(foo);

var a = 0;
function foo() {
  return regeneratorRuntime.wrap(function foo$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          a += 1;
          _context.next = 3;
          return '';

        case 3:
          return _context.abrupt('return');

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}
var f = foo();
f.next();
alert(a);