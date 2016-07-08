# Unicorn web framework

The Unicorn framework generates a scaffold for a simple node server with a loopy template, to populate a webpage dynamically.

## Installation
1. Install [Node](https://nodejs.org/en/)
1. Create a new directory using `mkdir <directory name>`
1. `cd <directory name>` to change into the directory
1. Generate a Unicorn scaffold with `npm install unicorn-list`
1. Start the server by running `npm start`
1. Go to [http://localhost:3000](http://localhost:3000) to see the magic happen!

## Usage
The `template-renderer.js` needs to be loaded before the `interface.js` in the template file.
```html
<script type="text/javascript" src='scripts/template-renderer.js'></script>
<script type="text/javascript" src='scripts/interface.js'></script>
```

In `interface.js`, you need to pass the object holding the array into `runRenderView` as an argument.

```javascript
var exampleObject = {
  names: ['andreamazza89','mtaner','Jojograndjojo','vannio']
}

runRenderView(exampleObject);
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
