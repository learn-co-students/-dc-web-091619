# Testing with Jest and Enzyme

## SWBAT

* Use Test Driven Development to build a React App
* Understand the different roles Jest and Enzyme play in React tests
* Test a React application with Jest and Enzyme
  * Include and install Enzyme in a create-react-app application
  * Write unit tests for Redux reducers
  * Write unit tests for React components

## Resources

* [Jest](https://jestjs.io/docs/en/getting-started)
* [Enzyme](https://airbnb.io/enzyme/)
* [Create React App Testing Tips](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
* [Helpful React Testing Tutorial](https://testdriven.io/tdd-with-react-jest-and-enzyme-part-one)

## What are Jest and Enzyme

### Jest

* Built by Facebook and included in React
* Comes built in when you use `create-react-app`
* Can be used with other libraries and testing frameworks
* To run the test suites, type `npm test` in the terminal

[To the DOCS 🚀](https://jestjs.io/docs/en/getting-started)

(Matchers are probably the most common functions used with the Jest library)

### Enzyme

* A plugin developed by AirBnB
* Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output
* Allows you to simulate runtime (which renders your app without actually rendering your app)
* Must be installed and configured separately

[To the DOCS 🚀](https://airbnb.io/enzyme/docs/installation/react-16.html)

In your project directory execute:

```bash
npm i --save-dev enzyme enzyme-adapter-react-16
```

Create a file `src/setupTests.js`

```javascript
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## Writing Tests

### Unit Testing Simple Functions

* Pure functions are easy to test because we just need to call them and check their return value
* We'll test our reducers for each action
* These tests look similar to rspec
* `describe` creating the test suite and `it` creating a single test

By convention, we put the tests in the same folder as the component you are testing (it makes imports easier). We'll create `src/redux/reducer.test.js` file and because Jest is built into React, we only need two imports:

```javascript
import React from 'react';
import reducer from './reducer';
```

After that, we declare our suite with a name and an arrow function

```javascript
describe('manageBand', () => {
  /* Test will go here */
})
```

Each test will need a name and an arrow function. If we look at the switch statement in our reducer, we see we have three actions we can test, so we'll write a test for each

```javascript
describe('manageBand', () => {
  it ('handles @@INIT'), () => {
    // code
  });

  it ('handles ADD_BAND', () => {
    // code
  });

  it ('handles DELETE_BAND', () => {
    // code
  });
});
```

The body will also follow a consistent pattern. Jest will mark a test as passed if all assertions are true

```javascript
it ('initializes state.band to empty array', () => {
  let action = {type: '@@INIT '}
  
  let mockState = reducer(undefined, action)

  expect(mockState.myBands).toEqual([]);
});

it("handles ADD_BAND", () => {
  const action = {type: "ADD_BAND", name: 'Romero Santos'}
  
  let mockState = reducer({myBands: []}, action)

  expect(mockState).toBeDefined
  expect(mockState.myBands.length).toBe(1)
  expect(mockState.myBands[0].name).toEqual(action.name)
  
})

it("handles DELETE_BAND", () => {
  const mockState = {
      myBands: [
          {
              id: 1,
              name: "marc"
          },
          {
              id: 2,
              name: "drake"
          }
      ]
  }

  let action = {type: "DELETE_BAND", id: 2}

  let result = reducer(mockState, action)

  expect(result.myBands.length).toBe(mockState.myBands.length - 1)
})

```

### Testing Container Components

* A bit more tricky as these are meant to be seen in the browser
* With Enzyme's `shallow` function, we can mock render one component at a time instead of the entire React app. It will return a JSX object describing the result we can then use our matchers on

The `BandContainer` component only takes in an array of `band` objects and renders a `Band` component for each. We will need some mock band data to simulate this.

We'll create `src/component/BandContainer.test.js`

```javascript
import React from 'react';
import BandContainer from './BandContainer'
import Band from './Band'
import {shallow} from 'enzyme'
```

shallow method is used to render the single component that we are testing.

```javascript
describe("Testing React DOM", () => {
    it("Should render band components" , () => {
        let mockBands = [
            {
                id: 1,
                name: "Green Day"
            },
            {
                id: 2,
                name: "Creed"
            }
        ]
        const wrapper = shallow(<BandContainer bands={mockBands} />)

        expect(wrapper.find(Band).length).toBe(mockBands.length)
    })
})
```
