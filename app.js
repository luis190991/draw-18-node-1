const http = require('http');
const fs = require('fs');
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'debug';



http.createServer((request, response) => {
  fs.readFile('./index.html', (err, html) => {
    logger.info("Conexón a la aplicación.");
    if (err) {
      logger.warn('404 - not found');
      response.writeHead(404, {
        'Content-Type': 'text/html'
      });
      response.write("404 - not found");
      response.end();
    } else {
      logger.info('200 - ok');
      response.write(html);
      response.end();
    }
  });
}).listen(3000);



/*let server = function(){

};
http.createServer(server);


http.createServer(function(){

});*/
