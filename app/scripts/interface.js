'use strict';
var exampleObject = {
  names: ['andreamazza89','mtaner','Jojograndjojo','vannio']
}

var templateContainer = document.getElementById('template-container');
var template = templateContainer.innerHTML;

runRenderView(exampleObject);
templateContainer.style.display = 'block';

function runRenderView(object) {
  renderView(object, template, function(renderedContent) {
    templateContainer.innerHTML = renderedContent;
  });
};
