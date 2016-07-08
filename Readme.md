# Unicorn web framework

The Unicorn framework generates a scaffold for a simple node server with a loopy template, to populate a webpage dynamically.

## Installation
1. Install [Node](https://nodejs.org/en/)
1. Create a new directory using `mkdir <directory name>`
1. `cd <directory name>` to change into the directory
1. Generate a Unicorn scaffold with `npm install ../unicorn-framework`
1. Start the server by running `npm start`
1. Go to http://localhost:3000 to see the magic happen!

## Usage
The `index.cats` file is a template for the main page, in which regular html syntax can be used.

You can use custom template tags to loop through an array and display the contents. Below is an example of how to implement the loop block. In our example, `names` is a property on an object that stores an array.

```html
{% loop names %}
  The index of this loop is {{ index }}.
  The contents of this loop are {{ item }}.
{% endloop %}
```

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
