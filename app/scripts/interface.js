'use strict';

$(document).ready(function() {
  var taskManager = new TaskManager();
  $('#task-form').on('submit', function(event) {
    event.preventDefault();
    var text = $('#task-content').val();
    taskManager.addTask(text);
    // console.log(taskManager.pendingTasks.join("\n"));
    $('#task-items').empty();
    for(var i = 0; i < taskManager.pendingTasks.length; i++) {
      $('#task-items').append('<li>' + taskManager.pendingTasks[i] + '</li>')

    }
  });

});

// function displayItems(array) {
//   for(var i = 0; i < array.length; i++) {
//   '<li>' + array[i] + '</li>'
//   }
// }
