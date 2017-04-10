import { applyMiddleware, createStore } from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from './reducers/index.jsx'
const middlewares = [];

if(process.env.NODE_ENV === "development"){
  middlewares.push(createLogger())
}

const middleware = applyMiddleware(...middlewares, promise(), thunk);

export default createStore(reducer, middleware)