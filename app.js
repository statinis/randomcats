var http = require('http'),
    connect = require('connect');

var app = connect()
  .use(connect.static('public'))
  .use(function(req, res){
    res.statusCode = 404;
    res.end("Not found!");
  })

var port = Number(process.env.PORT || 5000);

console.log("Server listening on http://0.0.0.0:"+port);

http.createServer(app).listen(port);
