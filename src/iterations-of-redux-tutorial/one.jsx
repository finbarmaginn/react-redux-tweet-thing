import { combineReducers, createStore } from "redux";

const userReducer = function (state={}, action) {
  switch(action.type){
    case "CHANGE_NAME": {
      state = {...state, name: action.payload};
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.payload};
      break;
    }
  }
  return state;
};

const tweetsReducer = function (state=[], action) {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.info("Store Changed", store.getState())
});

store.dispatch({type: "CHANGE_NAME", payload: "Finbar"});
store.dispatch({type: "CHANGE_AGE", payload: 26});
