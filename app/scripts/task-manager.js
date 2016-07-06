'use strict';

(function(exports) {
  function TaskManager(){
    this.pendingTasks = [];
    this.completedTasks = [];
  };

  TaskManager.prototype = {
    addTask: function(task){
      this.pendingTasks.push(task);
    },

    markAsComplete: function(task){
      if (this.pendingTasks.includes(task)){
        this.completedTasks.push(task);
        this.pendingTasks = this.pendingTasks.filter(isPendingTask);

        function isPendingTask(element){
          return element !== task;
        };
      }
      else {
        throw('Task doesn\'t exist');
      }
    }
  };

  exports.TaskManager = TaskManager;

})(this);
