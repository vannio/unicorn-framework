var http = require('http');
var fs = require('fs');
var server = http.createServer();
var serverPort = 3000;

server.on('request', simpleResponse);

function simpleResponse(request, response) {
	var url;

	if(request.url === '/') {
		url = './app/index.html'
	} else {
		url = './app/' + request.url;
	};

	fs.readFile(url, endResponse);

	function endResponse(err, responseContent) {
		if(err) console.error('There is an error', err)
		response.end(responseContent, 'utf-8');
	};
};

server.listen(serverPort, function() {
	console.log('IT MIGHT BE WORKING?');
});
