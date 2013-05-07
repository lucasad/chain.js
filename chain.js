var chain = module.exports  = function() {
  this.functions = [];
  for(var i=0;i<arguments.length;i++) {
    this.functions.push(arguments[i]);
  }
}

chain.prototype.add = function(fn) {
  this.functions.push(fn);
}

chain.prototype.runner = function() {
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
