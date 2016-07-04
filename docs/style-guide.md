# Style guide

This is a small style guide to set out agreed conventions for this project.
It will be updated as necessary but the points below are based on a conversation
the team had at the start of the project.

### File naming
All file names will be lowercase and separated by a dash, like so 
```my-new-pretty-filename.extension ```.

Directory names are to follow the same convention.

### Branch naming
All development branches are to start with the number of the issue they are 
related to, followed by the branch name, which is to be lowercase and 
dash-separated. Example: ```33-user-session-management```.

Any branches that are not directly related to an issue should follow the 
lowercase + dash-separated convention.

Finally, a branch named ```dev``` will be used for development and will have 
the code 'heavily' commented for educational purposes. Production code will be 
moved onto the master branch ahead of deployment.

### Strings
Where possible, all string literals will be written using single quotes, like 
so: ```'I am a pretty string'```

### Function declarations
The following example shows how a function declaration should be laid out:

```javascript
function foo() {
  indentedExpression1;
  indentedExpression2;
}
```

Where possible, named functions are to be preferred to anonymous functions 
assigned to a variable.

### Callbacks
Names functions are to be preferred as callbacks in place of anonymous 
functions.

```javascript
//Bad Example

mainFunction(argument1, argument2, function(callbackArgument1) {
  callbackExpression1;
  callbackExpression2;
});

//Good Example

mainFunction(argument1, argument2, namedCallback);

function namedCallback(callbackArgument1) {
  callbackExpression1;
  callbackExpression2;
}
```

This rule can and  should be bent if the callback is a very simple one, to the 
team's discretion.
