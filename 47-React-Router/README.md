## Review on Routes: Back end vs Front end
- make requests only for data (JSON)

- Back end world: a change in there URL, means a request response for a new page
- Front End: a change in the URL, clear the DOM (view) and show a different view

## [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

### Goal:
- add different views to our Paintr App
- buttons will change URL and the page
- have the same URL, show the same UX


### Set Up
- `npm install react-router-dom`

### BrowserRouter
- Will use 1 place in our application (and one place only) at the very top level
- Sometimes aliased

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop

### Nested Routes `/:slug`
- No longer rely on state to give us our painting

### Link
- Changes the url we see in the browser without a reload, must have a 'to' prop
- Route components will re-render and show components based on new url
- works with the browser's native back and forward controls

### Switch
- Pick one of the following routes (the first that matches) and load that component
- Doesn't look at the others (like an if/ else if/ else if)
- Takes in no props
