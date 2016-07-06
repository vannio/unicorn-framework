var expect = require('chai').expect;
var TaskManager = require('../app/scripts/task-manager').TaskManager;

describe('Task Manager', function(){
  var taskManager;
  var testTask = 'Painting my nails';

  beforeEach(function(){
    taskManager = new TaskManager();
  });

  describe('#addTask', function(){
    it('should add a new task', function(){
      taskManager.addTask(testTask);
      expect(taskManager.pendingTasks).to.include(testTask);
    });
  });

  describe('#markAsComplete', function(){
    it('moves completed tasks from pending tasks', function(){
      taskManager.addTask(testTask);
      taskManager.markAsComplete(testTask);
      expect(taskManager.pendingTasks).not.to.include(testTask);
      expect(taskManager.completedTasks).to.include(testTask);
    });

    it('throws an error when task doesn\'t exist', function(){
      var fn = function(){ taskManager.markAsComplete(testTask) }
      expect(fn).to.throw('Task doesn\'t exist');
    });
  });
});
