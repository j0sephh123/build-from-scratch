export function createStore(reducer, applyMiddleware) {
  let state;

  const getState = () => state;

  state = reducer(undefined, { type: "@@redux/INIT" });

  let dispatch = (action) => {
    state = reducer(state, action);
  };

  const enhancedDispatch = applyMiddleware
    ? applyMiddleware({ getState, dispatch })(dispatch)
    : dispatch;

  return {
    getState,
    dispatch: enhancedDispatch,
  };
}
