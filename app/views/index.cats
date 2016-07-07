<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script type="text/javascript" src='scripts/example-model.js'></script>
    <script type="text/javascript" src='scripts/template-renderer.js'></script>
    <script type="text/javascript" src='scripts/interface.js'></script>
    <link type="text/css" rel="stylesheet" href="stylesheets/stylesheet.css" />
    <meta charset="utf-8">
    <title></title>
</head>

<body>
  <div class='container'>
    <h1 class='title'>Unicorn List</h1>
    <div id='template-container' style='display:none'>
      <ul>
        {% loop unicornList %}
          <li id="{{ index }}">
            Unicorn name: {{ item }}
          </li>
        {% endloop %}
      </ul>
    </div>
  </div>
</body>
</html>
