'use strict';
var exampleObject = {
  names: ['andreamazza89','mtaner','Jojograndjojo','vannio']
}

$(document).ready(function() {
  var template = $('#template-container').html();

  runRenderView(exampleObject);
  $('#template-container').css('display', 'block');

  function runRenderView(object) {
    renderView(object, template, function(renderedContent) {
      $('#template-container').html(renderedContent);
    });
  };
});
