var fs = require('fs');
var regexPatterns = {
  loopBlock : /\{%\sloop(.|\n)+?endloop\s%\}/,
  loopArrayName : /\{%\sloop\s[\w.]+(?=\s%\})/,
  loopHTML : /%}(.|\n)+(?={%)/
}

function renderView(object, callback){
  fs.readFile('./app/views/index.cats', renderTemplate);

  function renderTemplate(error, fileContent){
    var stringContent = fileContent.toString('utf-8');
    stringContent = renderLoopBlocks(stringContent, object);
    //stringContent = renderIfBlocks(stringContent, object);
    callback(error, stringContent);
  }
}

function renderLoopBlocks(stringContent, object) {

  var matchedLoopBlock = stringContent.match(regexPatterns.loopBlock);

  while (matchedLoopBlock) {
    var propertyName = cleanPropertyName(matchedLoopBlock[0]);
    var list = eval(object[propertyName]);
    var partial = '';

    for (var i = 0; i < list.length; i++) {
      var rawHTML = extractHTML(matchedLoopBlock[0]);
      partial += rawHTML.split('{{ index }}').join(i).split('{{ item }}').join(list[i]);
    }

    stringContent = stringContent.replace(matchedLoopBlock[0], partial);
    matchedLoopBlock = stringContent.match(regexPatterns.loopBlock);
  }
  return stringContent;
}

function cleanPropertyName(string) {
  return string.match(regexPatterns.loopArrayName)[0].replace('{% loop ', '');
}

function extractHTML(string) {
  return string.match(regexPatterns.loopHTML)[0].replace('%}', '');
}

module.exports = renderView;
