var hi = require("../js/hello.js");

exports['basic'] = function(test){
  test.equal(hi.hello(), "Hello");
  //var h = 4; 
  //test.equal(2*h, 8);
  test.done(); 
}
