'use strict';

$(document).ready(function() {
  var taskManager = new TaskManager();
  $('#task-form').on('submit', function(event) {
    event.preventDefault();
    var text = $('#task-content').val();
    taskManager.addTask(text);

    $('#pending-task-items').empty();
    for(var i = 0; i < taskManager.pendingTasks.length; i++) {
      $('#pending-task-items').append('<li>' + '<input type=\'checkbox\'' + ' ' + 'name=' + i + ' ' + 'id=' + i +'>' + taskManager.pendingTasks[i] + '</li>');
    }

      $(':checkbox').change(function() {
        for(var i = 0; i < taskManager.pendingTasks.length; i++) {
          if ($('#' + i).is(":checked")) {
          taskManager.markAsComplete(taskManager.pendingTasks[i]);
          $('#completed-task-items').append('<li>' + taskManager.completedTasks[i] + '</li>');
        }
      }
    });
  });

});
