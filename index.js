// todos function
function todos(state = [], action) {
  if (action.type === "ADD_TODO") {
    //   returns brand new state by concatenating
    return state.concat([action.todo]);
  }
  return state;
}

function createStore() {
  // The store should have 4 parts
  /**
   * 1. State
   * 2. Get State
   * 3. Listen to changes
   * 4. Update
   */

  let state;
  let listeners = [];

  const getState = () => state;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      // remove subscription
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  const dispatch = (action) => {
    state = todos(state, action);
    listeners.forEach((listener) => listener());
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
}
