Chain.js
========

A utility for chaining together functions. It was inspired by connect.

Usage
-----

```javascript
var Chain = require('chain');
var func1 = function(a,b,next) {
  console.log("In func1, a is", a, "and b is", b);
  return next(a++,++b);
}
var func2 = function(a,b) {
  console.log("In func2, a is", a, "and b is", b);
  return "YAY";
}

var chained = new Chain(func1);
chained.use(func2);
console.log(chained(5,12));
```