import { createStore } from 'redux';

const reducer = (state = 1, action) => {
  switch (action.type) {
    case 'add':
      return state++;

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
