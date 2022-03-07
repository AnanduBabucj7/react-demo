import React from 'react';
import { createStore } from 'redux';
/**
 * Step 1 :  create a store
 * - A stre needs reducer and state
 * a store is created by createStore
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    default:
      return state;
  }
};
const store = createStore(counter);
store.subscribe(() => {
  console.log('State now : ', store.getState());
});

class Redux extends React.Component {
  clickHandler() {
    store.dispatch({ type: 'INCREMENT', payload: 1 });
  }
  render() {
    const str = 'hello';
    return (
      <div>
        <h1>Redux</h1>
        {store.getState()}
        <br />
        <button onClick={this.clickHandler}>click</button>
        {str.length}
      </div>
    );
  }
}
export default Redux;
