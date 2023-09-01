import { applyMiddleware, loggerMiddleware } from "./middleware";
import reducer from "./reducers";
import { createStore } from "./store";

const store = createStore(reducer, applyMiddleware([loggerMiddleware]));

store.dispatch({ type: "INCREMENT" }); // State changed: 1
store.dispatch({ type: "INCREMENT" }); // State changed: 2
store.dispatch({ type: "INCREMENT" }); // State changed: 3
store.dispatch({ type: "INCREMENT" }); // State changed: 4
store.dispatch({ type: "INCREMENT" }); // State changed: 5
