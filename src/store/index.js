import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "./reducers";
import rootEpic from "./epics";

const epicMiddleware = createEpicMiddleware();

const windowGlobal = typeof window !== 'undefined' && window

  const devtools =
  process.env.NODE_ENV === 'development' && windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;



const store = createStore(
  rootReducer,
  compose(applyMiddleware(epicMiddleware),devtools)
);

epicMiddleware.run(rootEpic);

export default store;
