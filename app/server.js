var http = require('http');
var fs = require('fs');
var server = http.createServer();
var serverPort = 3000;
var renderView = require('./helpers');
var TaskManager = require('./scripts/task-manager.js').TaskManager;
var taskManager = new TaskManager();

server.on('request', simpleResponse);

function simpleResponse(request, response) {
	var responseContent;

	if(request.url === '/' && request.method === 'GET') {
		renderView(taskManager, endResponse);
	}
	else if(request.url === '/' && request.method === 'POST') {
		var string = '';

		request
			.on('data', function(chunk){
				string += chunk.toString('utf-8');
			})
			.on('end', function(){
				taskManager.addTask(string);
				renderView(taskManager, endResponse);
			});
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
