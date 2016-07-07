<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script type="text/javascript" src='scripts/task-manager.js'></script>
    <script type="text/javascript" src='scripts/template-renderer.js'></script>
    <script type="text/javascript" src='scripts/interface.js'></script>
    <link type="text/css" rel="stylesheet" href="stylesheets/stylesheet.css" />
    <meta charset="utf-8">
    <title></title>
</head>

<body>
  <div class='container'>
    <h1 class='title'>Unicorn Tasks</h1>
    <form id='task-form'>
      <input class='task-input' id='task-content' name='task' type='text' required='true' placeholder='Look pretty and polish my horn' autocomplete='off' autofocus>
      <input class='button' id='add-task' type='submit' value='Add Task'>
    </form>
    <div id='task-items-container'>
      <ul class='pending' id='pending-task-items'>
          {% loop pendingTasks %}
            <li id="{{ index }}" class="pending">
              <input type="checkbox" name="{{ index }}" id="item-{{ index }}">
              <label for="item-{{ index }}">{{ item }}</label>
            </li>
          {% endloop %}
      </ul>
      <ul class='completed' id='completed-task-items'>
          {% loop completedTasks %}
            <li id="{{ index }}" class="completed">
              {{ item }}
            </li>
          {% endloop %}
      </ul>
    </div>
  </div>
</body>
</html>
