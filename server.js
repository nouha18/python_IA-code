const http = require('http');
const express = require('express');


app.use(express.static(process.cwd()+"/dist/onepageangularsite/"));
app.set('view engine' ,'html');


http.createServer(function(request, response) {

writeHead(200, {'Content-Type': 'text/html'});

end('<H1>Server Portfolio</H1>');

}).listen(process.env.PORT);

console.log('App is running…');







