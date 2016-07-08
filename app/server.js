var http = require('http');
var fs = require('fs');
var server = http.createServer();
var serverPort = 3000;

server.on('request', simpleResponse);

function simpleResponse(request, response) {
	var route = '';
	var responseContent;

	if (request.url === '/') {
		responseContent = fs.readFile('./app/views/index.cats', endResponse);
	}
	else if (request.url.match(/\.[^.]*$/)) {
		var url = './app/' + request.url;
		responseContent = fs.readFile(url, endResponse);
	}
	else {
		responseContent = fs.readFile('./app/views' + request.url + '.cats', endResponse);
	};

	function endResponse(error, responseContent) {
		if (error) {
			responseContent = 'Page not found';
			console.error('There is an error', error);
		}

		response.end(responseContent, 'utf-8');
	};
};

server.listen(serverPort, function() {
	console.log(" \\");
	console.log("  \\ji");
	console.log(" /.(((");
	console.log("(,/'(((__,--.");
	console.log("    \\  ) _( /{");
	console.log("    !|| ' :|| ");
	console.log("    !||   :|| ");
	console.log("    '''   ''' ");
	console.log('');
	console.log('Unicorns are running on http://localhost:' + serverPort);
});
