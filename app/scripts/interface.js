'use strict';

$(document).ready(function() {
  var template = $('#template-container').html();
  var exampleModel = new ExampleModel();

  runRenderView();
  $('#template-container').css('display', 'block');

  function runRenderView() {
    renderView(exampleModel, template, function(renderedContent) {
      $('#template-container').html(renderedContent);
    });
  };
});
