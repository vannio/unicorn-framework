<!DOCTYPE html>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
    <script type="text/javascript" src='scripts/template-renderer.js'></script>
    <script type="text/javascript" src='scripts/interface.js'></script>
    <link type="text/css" rel="stylesheet" href="stylesheets/stylesheet.css" />
    <meta charset="utf-8">
    <title>Unicorn Framework</title>
</head>

<body>
  <div class='container'>
    <h1 class='title'>Unicorn Framework</h1>
    <div id='template-container' style='display:none'>
      This framework was created by:
      <ul class='name-list'>
        {% loop names %}
          <li id="{{ index }}">
           <a href='http://github.com/{{ item }}' target='_blank'>@{{ item }}</a>
          </li>
        {% endloop %}
      </ul>
    </div>
  </div>
</body>
</html>
