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

### States

States rely on hooks and are able to update the element data.

> **Note:** Unlike props which are passed to components as the first function parameter, the state is initiated and stored within a component. You can pass the state information to children components as props, but the logic for updating the state should be kept within the component where state was initially created.

## JSX

Three rules of JSX: [here](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx)

1. Return a single root element
2. Close all the tags
3. camelCase ~~all~~ most of the things!

## Babel

JavaScript compiler to transform e.g. JSX code into regular JavaScript.

## Next.js

Next.js by default uses React's Server Components to boost performance. In order to use states or events we need to declare Client Component explicitly.

```javascript
'use client'; // Use this directive

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Like ({likes})</button>;
}
```
