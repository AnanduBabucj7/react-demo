import React from 'react';
import { createStore } from 'redux';
/**
 * Step 1 :  create a store
 * - A stre needs reducer and state
 * a store is created by createStore
 */
class Redux extends React.Component {
  render() {
    const reducer = (state, action) => {
      switch (action.type) {
        case 'ATTACK':
          return action.payload;
        default:
          return state;
      }
    };
    const store = createStore(reducer, 'Peace');
    store.subscribe(() => {
      console.log('State now : ', store.getState());
    });
    store.dispatch({ type: 'ATTACK', payload: 'MAX' });
    return (
      <div>
        <h1>Redux</h1>
      </div>
    );
  }
}
export default Redux;
