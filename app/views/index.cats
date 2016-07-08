<!DOCTYPE html>
<html>
  <head>
    <link type='text/css' rel='stylesheet' href='stylesheets/stylesheet.css' />
    <meta charset='utf-8'>
    <title>Unicorn Framework</title>
  </head>

  <body>

    <div class='container'>
      <h1 class='title'>Unicorn Framework</h1>
      <div id='template-container' style='display:none'>
        This framework was created by:
        <ul class='name-list'>
          {% loop object.names %}
            <li id='{{ index }}'>
             <a href='http://github.com/{{ item }}' target='_blank'>@{{ item }}</a>
            </li>
          {% endloop %}

          {% if object.names.length > 1 %}
            <li>Hello, this is true</li>
          {% endif %}

          {% if (0) %}
            <li>Hello, this is false</li>
          {% endif %}
        </ul>
      </div>
    </div>

    <script type='text/javascript' src='scripts/template-renderer.js'></script>
    <script type='text/javascript' src='scripts/interface.js'></script>

  </body>
</html>
