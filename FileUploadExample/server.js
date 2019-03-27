var http = require('http');

//create a server object:
http.createServer(  
    function (req, res) {
        var data = '';
        
        req.on('data', function (chunk) {
            data += chunk;
        });
        
        req.on('end', function () {
            console.log('POST data received');
            res.writeHead(200, {
                'Content-Type': 'text/json'
            });
            res.write(JSON.stringify(data));
            res.end();
        });
    }
).listen(8009); //the server object listens on port 8080