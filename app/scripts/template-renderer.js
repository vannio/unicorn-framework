(function(exports) {
    var regexPatterns = {
        loopBlock: /\{%\sloop(.|\n)+?endloop\s%\}/,
        loopArrayName: /\{%\sloop\s[\w.]+(?=\s%\})/,
        loopHTML: /%}(.|\n)+(?={%)/
    }

    function renderView(object, content, callback) {
        var stringContent = content;
        stringContent = renderLoopBlocks(stringContent, object);
        callback(stringContent);
    }

    function renderLoopBlocks(stringContent, object) {
        var matchedLoopBlock = stringContent.match(regexPatterns.loopBlock);
        while (matchedLoopBlock) {
            var propertyName = cleanPropertyName(matchedLoopBlock[0]);
            var list = object[propertyName];
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

    exports.renderView = renderView;

})(this);
