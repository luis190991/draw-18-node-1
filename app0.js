const http = require('http');
const fs = require('fs');

let file = fs.readFileSync("./index.html");
http.createServer((request, response) => {
  response.write(file);
  response.end();
}).listen(4000);



/*let server = function(){

};
http.createServer(server);


http.createServer(function(){

});*/
