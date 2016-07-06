var http = require('http');
var fs = require('fs');
var server = http.createServer();
var serverPort = 3000;
var TaskManager = require('./app/scripts/task-manager').;

server.on('request', simpleResponse);

function simpleResponse(request, response) {
	var responseContent;

	if(request.url === '/') {
		renderView(endResponse);
	} else {
		var url = './app/' + request.url;
		responseContent = fs.readFile(url, endResponse);
	};

	function renderView(callback){
		fs.readFile('./app/views/index.cats', renderTemplate);

		function renderTemplate(error, fileContent){
			var stringContent = fileContent.toString('utf-8');
			var match = stringContent.match(/\{%\sloop(.|\n)+?endloop\s%\}/)[0];
			var arrayName = match.match(/\{%\sloop\s[\w.]+(?=\s%\})/)[0].replace('{% loop ', '');

			eval(arrayName)

			responseContent = '<body>This is a renderView response</body>';
			callback(error, responseContent);
		}
	}

	function endResponse(error, responseContent) {
		if(error) console.error('There is an error', error);
		response.end(responseContent, 'utf-8');
	};
};

server.listen(serverPort, function() {
	console.log('IT MIGHT BE WORKING?');
});
