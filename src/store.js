import { createStore } from 'redux';

// Initial state
const initialState = {};

// Reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Define your action cases here
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(rootReducer);

export default store;
