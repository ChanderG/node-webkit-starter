//var fs = require('fs');

/*
var hi_file = 'hi.txt';
var hi;

//fs.readFileSync(hi_file, hi);
//console.log(hi);

fs.readFile(hi_file,'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
*/

/*
var Promise = require('bluebird');
Promise.promisifyAll(fs);
fs.readFileAsync(hi_file,'utf8').then(function(data){
  console.log(data);
});
*/


sayhi = function() {
  alert("Hello Stonehenge!!");
  console.log("Hello Rory Williams");
   
  var fs = require('fs');
  //currently relative path does not work
  fs.writeFileSync("hello.txt","I know! Dinosaurs on a Spaceship"); 

  //here is why - and it makes sense 
  console.log(process.cwd());
  
  /* 
  var Promise = require('bluebird');
  Promise.promisifyAll(fs);

  fs.readFileAsync("hello.txt",'utf8').then(function(data){
    console.log(data);
  });
  */
}
