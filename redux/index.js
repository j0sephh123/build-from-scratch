import { applyMiddleware, loggerMiddleware } from "./middleware";
import reducer from "./reducers";
import { createStore } from "./store";

const store = createStore(reducer, applyMiddleware([loggerMiddleware]));

store.subscribe((msg) => {
  console.log(msg);
});

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
