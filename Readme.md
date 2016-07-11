# Unicorn web framework

The Unicorn framework generates a scaffold for a simple node server. It uses the well known `.cats` engine to populate pages dynamically.

## Installation
1. Install [Node](https://nodejs.org/en/)
1. Create a new directory using `mkdir <directory name>`
1. `cd <directory name>` to change into the directory
1. Generate a Unicorn scaffold with `npm install unicorn-list`
1. Start the server by running `npm start`
1. Go to [http://localhost:3000](http://localhost:3000) to see the magic happen!

## Usage
- `unicorn-style.css` needs to be loaded inbetween the `<head>` tags
- The library scripts need to be loaded just before the closing `</body>` tag in order for the `interface.js` to capture the template after the DOM has loaded
- The `unicorn-renderer.js` needs to be loaded before any interface scripts
- Add a class `unicorn-container` to the element holding the template. This hides the dynamic content of the template until it is rendered.

```html
<!-- index.cats -->
<html>
  <head>
    <link type='text/css' rel='stylesheet' href='stylesheets/unicorn-style.css'>
  </head>

  <body>
    <h1>Title</h1>
    <p>Some example static content</p>

    <div id="example-container" class="unicorn-container">
      {% if object.length > 1 %}
        <p>Some example dynamic content</p>
      {% endif %}
    </div>

    <!-- scripts just before closing body tag -->
    <script type="text/javascript" src='scripts/unicorn-renderer.js'></script>
    <script type="text/javascript" src='scripts/interface.js'></script>
  </body>
</html>
```

Simply pass the object to be rendered into `renderView` as an argument, and the container holding the template tags as the second argument.

```javascript
// interface.js
var exampleObject = {
  names: ['andreamazza89','mtaner','Jojograndjojo','vannio']
}

var exampleContainer = document.getElementById('example-container');

renderView(exampleObject, exampleContainer);
```


#### Routes
The `index.cats` file is a template for the main page, in which regular html syntax can be used along with custom template tags. If you want to use a different route, create a `.cats` file in the `views` directory with the matching name of the route.

#### Loops
You can use `{% loop array %}` template tags to loop through an array and display the contents. In our example, `object.names` is an array.

```html
{% loop object.names %}
  <p>The index of this loop is {{ index }}.</p>
  <p>The contents of this loop are {{ item }}.</p>
{% endloop %}
```

#### Conditionals
You can use `{% if expression %}` template tags to render content, based on an expression that returns a boolean. In our example, the expression `object.names.length > 1` returns `true`, therefore the HTML gets rendered.

```html
{% if object.names.length > 1 %}
  <li>Hello, this is true</li>
{% endif %}
```

## Examples
The unicorn framework is growing in popularity. If you use it in your project, please send it to us and we will add it to the list below:

- [To-do-list](https://github.com/Jojograndjojo/To-do-List)
