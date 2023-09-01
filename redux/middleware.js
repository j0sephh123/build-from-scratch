export const loggerMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    console.log("Action:", action);
    console.log("State before dispatch:", getState());
    const result = next(action);
    console.log("State after dispatch:", getState());
    return result;
  };

export const applyMiddleware =
  (middlewares) =>
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    let enhancedDispatch = middlewares
      .map((middleware) =>
        middleware({
          getState,
          dispatch,
        })
      )
      .reduce((acc, cur) => (act) => cur(acc))(next);
    return enhancedDispatch(action);
  };
