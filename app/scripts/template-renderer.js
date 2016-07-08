(function(exports) {
  var regexPatterns = {
    loopBlock: /\{%\sloop(.|\n)+?endloop\s%\}/,
    loopArrayName: /\{%\sloop\s[\w.]+(?=\s%\})/,
    rawHTML: /%}(.|\n)+(?={%)/,
    ifBlock: /\{%\sif(.|\n)+?endif\s%\}/,
    ifExpression: /\{%\sif\s.+?(?=\s%\})/
  }

  function renderView(object, content, callback) {
    var stringContent = content;

    stringContent = renderLoopBlocks(stringContent, object);
    stringContent = renderIfBlocks(stringContent, object);
    callback(stringContent);
  }

  function renderLoopBlocks(stringContent, object) {
    var matchedLoopBlock = stringContent.match(regexPatterns.loopBlock);

    while (matchedLoopBlock) {
      var propertyName = cleanExpression(matchedLoopBlock[0], 'loopArrayName', '{% loop ');
      var list = eval(propertyName);
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

  function cleanExpression(string, pattern, trimString) {
    return string.match(regexPatterns[pattern])[0].split('&gt;').join('>').replace(trimString, '');
  }

  function extractHTML(string) {
    return string.match(regexPatterns.rawHTML)[0].replace('%}', '');
  }

  function renderIfBlocks(stringContent, object) {
    var matchedIfBlock = stringContent.match(regexPatterns.ifBlock);

    while(matchedIfBlock) {
      var expression = cleanExpression(matchedIfBlock[0], 'ifExpression', '{% if ');

      if(eval(expression)) {
        stringContent = stringContent.replace(matchedIfBlock[0], extractHTML(matchedIfBlock[0]));
      }
      else {
        stringContent = stringContent.replace(matchedIfBlock[0], '');
      }

      matchedIfBlock = stringContent.match(regexPatterns.ifBlock);
    }

    return stringContent;
  }

  exports.renderView = renderView;

})(this);
