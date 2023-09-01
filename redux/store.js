export function createStore(reducer, applyMiddleware) {
  let state;
  let listeners = [];

  const getState = () => state;

  state = reducer(undefined, { type: "@@redux/INIT" });

  let dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener('hi'))
  };

  const enhancedDispatch = applyMiddleware
    ? applyMiddleware({ getState, dispatch })(dispatch)
    : dispatch;

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  };

  return {
    subscribe,
    getState,
    dispatch: enhancedDispatch,
  };
}
