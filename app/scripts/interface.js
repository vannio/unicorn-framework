'use strict';

$(document).ready(function() {
  var taskManager = new TaskManager();
  $('#task-form').on('submit', function(event) {
    event.preventDefault();
    var text = $('#task-content').val();
    taskManager.addTask(text);

    $('#task-items').empty();
    for(var i = 0; i < taskManager.pendingTasks.length; i++) {
      $('#task-items').append('<li>' + taskManager.pendingTasks[i] + '</li>')

    }
  });

});
