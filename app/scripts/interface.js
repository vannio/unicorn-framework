'use strict';

$(document).ready(function() {
  var taskManager = new TaskManager();
  $('#task-form').on('submit', function(event) {
    var text = $('#task-content').val();
    taskManager.addTask(text);

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
