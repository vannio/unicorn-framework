function TaskManager(){
  this.pendingTasks = [];
};

TaskManager.prototype = {
  addTask: function(task){
    // var task = task;
    this.pendingTasks.push(task);
  }
};

module.exports = TaskManager;
