import { combineReducers } from "redux";

import tweets from "./tweetsReducer.jsx";
import me from "./meReducer.jsx";

const reducer = combineReducers({
  tweets,
  me,
});

export default reducer