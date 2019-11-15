## Object Oriented JavaScript: `this`

- Execution Context
 - working 'off of' some object

*We want to use this just like ruby's self*

### `this` and the function execution context
- in the browser vs. in node

### JS `this` vs Ruby `self`
- the value of `this` changes depending on which object the function is invoked from
- implied `this` for all functions
- `this` is also known as the execution context
  - window?
  - obj?
  - HTML node?

### `bind` and explicit content setting
  - bind returns a new function where the value of `this` is pre-set

### `this` and implicit content setting
- this is always determined by the object to the left of the '.'
- inside arrow functions, `this` takes on the value of the outer scope's `this`


### Quick Aside: Strict Mode
- undeclared variables not allowed
- `this` inside a function is undefined
