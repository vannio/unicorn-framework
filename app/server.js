var http = require('http');
var fs = require('fs');
var server = http.createServer();
var serverPort = 3000;
var TaskManager = require('./scripts/task-manager.js').TaskManager;
var taskManager = new TaskManager();

server.on('request', simpleResponse);

function simpleResponse(request, response) {
	var responseContent;

	if(request.url === '/') {
    responseContent = fs.readFile('./app/views/index.cats', endResponse);
	}
  else {
		var url = './app/' + request.url;
		responseContent = fs.readFile(url, endResponse);
	};

	function endResponse(error, responseContent) {
		if(error) console.error('There is an error', error);
		response.end(responseContent, 'utf-8');
	};
};

server.listen(serverPort, function() {
	console.log('IT MIGHT BE WORKING?');
});
