var http = require('http');

var server = http.createServer(function requestHandler(req, res){

  fs.readFile('index.html', function(err, data){

    if(err){
      res.statusCode = 500;
      res.statusMessage = "Something went wrong";
      return res.end();
    }
    processFile();
  });
});

server.listen(8080, function() {
  console.log('listening on port 8080');
});

function processfile(){
  console.log(data);
}