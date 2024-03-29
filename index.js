/*
 * Primary file for the API
 *
 */

//Dependencies
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

//The server should response to all request with strings
var server = http.createServer(function (req,res) {

    //Get the url and parse it
    var parsedUrl = url.parse(req.url,true);

    //Get the path
    var path = parsedUrl.pathname;
    //Remove '/' from the path and make trimmed path
    //below first perameter is Regex equation to remove '/'
    var trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Get query string as an object.
    var queryStringObject = parsedUrl.query;

    //Get the HTTP Method
    var method = req.method.toLowerCase();

    //Get the Headers as an object
    var headers = req.headers;

    //Get the payload, If any
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data',function (data) {
       buffer += decoder.write(data);
    });
    req.on('end',function () {
        buffer += decoder.end();

    //Send the response
    res.end('Hello World \n');
    // Log the request path
        console.log('Request received with Headers: ', headers);
    console.log('Request received with Payload: ' + buffer);

  });

});

//Start with server, and have it listen on port 3000
server.listen(3000,function () {
    console.log("Server is listening on port 3000 now");
});
