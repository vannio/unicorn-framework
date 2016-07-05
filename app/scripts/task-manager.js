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
      var index = this.pendingTasks.indexOf(task);
      this.completedTasks.push(task);
      delete this.pendingTasks[index];

      this.pendingTasks = this.pendingTasks.filter(function(element){
        return element !== undefined;
      });

      // this.pendingTasks = this.pendingTasks.filter(function(element){
      //   return element !== task;
      // });
    }
  }
};

module.exports = TaskManager;
