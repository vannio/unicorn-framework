var expect = require('chai').expect;
var TaskManager = require('../app/scripts/task-manager');

describe('Task Manager', function(){
  var taskManager;

  beforeEach(function(){
    taskManager = new TaskManager();
  });

  describe('#addTask', function(){
    it('should add a new task', function(){
      taskManager.addTask({ 1: 'This is a todo' });
      expect(taskManager.pendingTasks).to.include({ 1: 'This is a todo' });
    });
  });
});
