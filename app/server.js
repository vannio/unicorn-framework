var http = require('http');
var fs = require('fs');
var server = http.createServer();
var serverPort = 3000;

var TaskManager = require('./scripts/task-manager.js').TaskManager;
var taskManager = new TaskManager();

taskManager.addTask('Task 1');
taskManager.addTask('Task 2');
taskManager.addTask('Task 3');

taskManager.markAsComplete('Task 2');

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
			var matchedBlock = stringContent.match(/\{%\sloop(.|\n)+?endloop\s%\}/);

			while (matchedBlock) {
				var arrayName = matchedBlock[0].match(/\{%\sloop\s[\w.]+(?=\s%\})/)[0].replace('{% loop ', '');
				var array = eval(arrayName);
				var partial = '';

				for (var i = 0; i < array.length; i++) {
					var raw = matchedBlock[0].match(/%}(.|\n)+(?={%)/)[0].replace('%}', '');

					partial += raw.split('{{ index }}').join(i).split('{{ item }}').join(array[i]);
				}

				stringContent = stringContent.replace(matchedBlock[0], partial);
				matchedBlock = stringContent.match(/\{%\sloop(.|\n)+?endloop\s%\}/);
			}

			callback(error, stringContent);
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
