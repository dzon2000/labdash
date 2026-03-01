# Notes to remember

## React

### Components

Components are just JavaScript functions returning JSX. Make sure to use capitalized names to differentiate components from regular JavaScript functions. Also, the components must be invoked using JSX syntax.

```javascript
function Header() {
  return <h1>Hello!</h1>
}

root.render(<Header />)
````

### Props

Object restructuing [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring). Basically we can get the concrete information about JSON objects like so:

```javascript
functtion Header({title}) { // Extracts title from props object
  return <h1>{title}</h1>
}
````

## JSX

Three rules of JSX: [here](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx)

1. Return a single root element
2. Close all the tags
3. camelCase ~~all~~ most of the things!

## Babel

JavaScript compiler to transform e.g. JSX code into regular JavaScript.
