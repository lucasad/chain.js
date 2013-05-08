module.exports = function() { // object creation
  var Chain = (function() {
    return Chain.runner().apply(Chain, arguments); 
  });

  chain.apply(Chain, arguments);

  return Chain;
}

var chain =  function() {
  this.functions = [];
  for(var i=0;i<arguments.length;i++) {
    this.functions.push(arguments[i]);
  }

  this.use = function(fn, test) {
    this.functions.push(fn);
    return this;
  };

  this.runner = function() {
    var self = this;
    var run = function(n) {
      var current = self.functions[n];
      return function() {
        var next = run(++n);
        arguments[arguments.length++] = next;
      return current.apply(self, arguments)
      };
    };
    return run(0);
  };
}
