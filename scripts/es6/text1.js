var a = 0;
function *foo() {
  a += 1;
  yield '';
  return;
}
var f = foo();
f.next();
alert(a);